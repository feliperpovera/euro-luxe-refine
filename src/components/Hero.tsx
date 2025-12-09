import heroImage from "@/assets/hero-interior.jpg";
import { Button } from "@/components/ui/button";
import ContactFormDialog from "@/components/ContactFormDialog";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxurious interior with European wall finishes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-2xl">
          <p className="text-primary font-medium mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            European Luxury Wall Finishes
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Walls like{" "}
            <span className="text-gradient-gold">no other</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Transforming spaces with artisanal Italian techniques and the highest 
            quality finishes. Venetian plaster, marmorino, and unique textures 
            for exclusive projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <ContactFormDialog>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover-gold-glow">
                Request a Quote
              </Button>
            </ContactFormDialog>
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
