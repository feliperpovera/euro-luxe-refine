import heroImage from "@/assets/hero-interior.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Lujoso interior con acabados de pared europeos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-2xl">
          <p className="text-primary font-medium mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Acabados de Lujo Europeos
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Definimos la{" "}
            <span className="text-gradient-gold">Elegancia</span>{" "}
            en tus Paredes
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Transformamos espacios con técnicas artesanales italianas y acabados 
            de la más alta calidad. Estuco veneciano, marmorino y texturas únicas 
            para proyectos exclusivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover-gold-glow">
              Explorar Proyectos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground/10">
              Solicitar Presupuesto
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
