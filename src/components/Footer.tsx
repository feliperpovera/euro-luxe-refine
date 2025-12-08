import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src={logo} alt="European Luxury Wall Finishes" className="h-40 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Transforming spaces with the highest quality artisanal finishes. 
              Traditional European techniques for exclusive projects.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Fort Lauderdale Studio</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>2800 Weston Road, Suite 204<br />Weston, FL 33331</span>
              </div>
              <a href="tel:+19547028079" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +1 (954) 702-8079
              </a>
              <a href="mailto:info@europeanluxurywallfinishes.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4" />
                info@europeanluxurywallfinishes.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Services
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 European Luxury Wall Finishes. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/european-luxury-wall-finishes/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/europeanluxurywallfinishes?igsh=eGdwaWwwYWhuc3V6" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/share/1Cj3pWXudQ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://youtube.com/@europeanluxurywallfinishes?si=wttr2R_GezxOUKjU" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
