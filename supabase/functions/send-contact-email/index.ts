import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

// Security headers including CORS
const securityHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};

interface ContactFormRequest {
  name: string;
  phone: string;
  email: string;
  message: string;
}

// Input validation functions
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-+()]+$/;
  return phoneRegex.test(phone) && phone.length <= 20;
};

const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && name.length <= 100;
};

const validateMessage = (message: string): boolean => {
  return message.trim().length >= 10 && message.length <= 2000;
};

// Sanitize HTML to prevent XSS attacks
const sanitizeHtml = (str: string): string => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .trim();
};

// Rate limiting map (in-memory, resets on function restart)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT = 5; // Max requests per window
const RATE_WINDOW = 60000; // 1 minute in milliseconds

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now - record.timestamp > RATE_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return true;
  }
  
  if (record.count >= RATE_LIMIT) {
    return false;
  }
  
  record.count++;
  return true;
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: securityHeaders });
  }

  // Get client IP for rate limiting
  const clientIP = req.headers.get("x-forwarded-for") || 
                   req.headers.get("cf-connecting-ip") || 
                   "unknown";

  // Check rate limit
  if (!checkRateLimit(clientIP)) {
    console.warn(`Rate limit exceeded for IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ error: "Too many requests. Please try again later." }),
      {
        status: 429,
        headers: { "Content-Type": "application/json", ...securityHeaders },
      }
    );
  }

  try {
    const body = await req.json();
    const { name, phone, email, message } = body as ContactFormRequest;

    // Validate all inputs
    const errors: string[] = [];
    
    if (!name || !validateName(name)) {
      errors.push("Name must be between 2 and 100 characters");
    }
    
    if (!phone || !validatePhone(phone)) {
      errors.push("Please provide a valid phone number");
    }
    
    if (!email || !validateEmail(email)) {
      errors.push("Please provide a valid email address");
    }
    
    if (!message || !validateMessage(message)) {
      errors.push("Message must be between 10 and 2000 characters");
    }

    if (errors.length > 0) {
      console.warn("Validation errors:", errors);
      return new Response(
        JSON.stringify({ error: errors.join(". ") }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...securityHeaders },
        }
      );
    }

    // Sanitize inputs before using in HTML
    const sanitizedName = sanitizeHtml(name);
    const sanitizedPhone = sanitizeHtml(phone);
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedMessage = sanitizeHtml(message);

    console.log("Processing contact form submission for:", sanitizedEmail);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>",
        to: ["europeanluxurywallfinishes@gmail.com"],
        subject: `Nueva consulta de ${sanitizedName}`,
        html: `
          <h2>Nueva consulta desde el formulario de contacto</h2>
          <p><strong>Nombre:</strong> ${sanitizedName}</p>
          <p><strong>Teléfono:</strong> ${sanitizedPhone}</p>
          <p><strong>Email:</strong> ${sanitizedEmail}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${sanitizedMessage}</p>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend API error:", error);
      throw new Error("Failed to send email");
    }

    const data = await res.json();
    console.log("Email sent successfully:", data.id);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...securityHeaders },
    });
  } catch (error: any) {
    console.error("Error sending email:", error.message);
    return new Response(
      JSON.stringify({ error: "An error occurred. Please try again." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...securityHeaders },
      }
    );
  }
};

serve(handler);
