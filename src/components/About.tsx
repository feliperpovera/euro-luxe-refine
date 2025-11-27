import interiorBedroom from "@/assets/interior-bedroom.jpg";
import interiorLiving from "@/assets/interior-living.jpg";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  "Over 20 years of experience",
  "Premium European materials",
  "Authentic artisanal techniques",
  "Satisfaction guaranteed",
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
                  src={interiorBedroom}
                  alt="Bedroom with luxury wall finishes"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-primary p-6 rounded-lg text-center">
                <span className="text-4xl font-serif font-bold text-primary-foreground">500+</span>
                <p className="text-primary-foreground/80 text-sm mt-1">Projects Completed</p>
              </div>
            </div>
            <div className="pt-8">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={interiorLiving}
                  alt="Living room with Venetian finishes"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Excellence in Every Detail
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              European Luxury Wall Finishes is a leader in high-end decorative finishes. 
              Our team of certified artisans transforms ordinary spaces into 
              interior design masterpieces, combining traditional European techniques 
              with contemporary innovation.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We work with architects, designers, and discerning homeowners who seek 
              to create unique and sophisticated environments. Each project is an expression of 
              timeless elegance.
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

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
