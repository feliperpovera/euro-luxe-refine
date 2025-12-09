import guildLogo from "@/assets/guild-master-craftsmen.png";
import markPhoto from "@/assets/mark-bilner.jpg";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import ContactFormDialog from "@/components/ContactFormDialog";

const features = [
  "30+ years of experience",
  "UK-trained master artisan",
  "Traditional European techniques",
  "Based in South Florida",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={markPhoto}
                  alt="Mark Bilner - Master Artisan"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-primary p-6 rounded-lg text-center">
                <span className="text-4xl font-serif font-bold text-primary-foreground">30+</span>
                <p className="text-primary-foreground/80 text-sm mt-1">Years Experience</p>
              </div>
            </div>
            <div className="pt-8">
              <div className="overflow-hidden rounded-lg bg-background p-4 flex items-center justify-center">
                <img
                  src={guildLogo}
                  alt="Guild of Master Craftsmen"
                  className="w-full h-72 object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Mark Bilner
            </h2>
            <p className="text-primary font-medium mb-6">
              UK-Trained Master Artisan | 30+ Years of Experience
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Born and trained in England, Mark Bilner is a professional builder and master of 
              Venetian plaster and luxury wall finishes. With over three decades of expertise, 
              Mark combines traditional European techniques with modern elegance.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From high-gloss marble textures to subtle matte lime washes, Mark's work has graced 
              luxury interiors across Washington D.C., Miami, Naples, Tampa, Daytona Beach, and 
              the Florida Panhandle. Every project is approached with precision, care, and a deep 
              respect for old-world artistry.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <ContactFormDialog>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Request a Quote
              </Button>
            </ContactFormDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
