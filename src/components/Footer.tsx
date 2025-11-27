import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-serif font-bold text-primary">ELW</span>
            </div>
            <p className="text-foreground font-serif text-xl mb-2">
              European Luxury Wall Finishes
            </p>
            <p className="text-muted-foreground text-sm max-w-md">
              Transformamos espacios con acabados artesanales de la más alta calidad. 
              Técnicas europeas tradicionales para proyectos exclusivos.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
              <a href="mailto:info@elwfinishes.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4" />
                info@elwfinishes.com
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Luxury Avenue, Miami, FL 33101</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Enlaces</h4>
            <div className="space-y-3">
              <a href="#inicio" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Inicio
              </a>
              <a href="#servicios" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Servicios
              </a>
              <a href="#portfolio" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Portfolio
              </a>
              <a href="#nosotros" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Nosotros
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 European Luxury Wall Finishes. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
