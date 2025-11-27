import interiorBedroom from "@/assets/interior-bedroom.jpg";
import interiorLiving from "@/assets/interior-living.jpg";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  "Más de 20 años de experiencia",
  "Materiales premium europeos",
  "Técnicas artesanales auténticas",
  "Garantía de satisfacción",
];

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={interiorBedroom}
                  alt="Dormitorio con acabados de lujo"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-primary p-6 rounded-lg text-center">
                <span className="text-4xl font-serif font-bold text-primary-foreground">500+</span>
                <p className="text-primary-foreground/80 text-sm mt-1">Proyectos Completados</p>
              </div>
            </div>
            <div className="pt-8">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={interiorLiving}
                  alt="Sala de estar con acabados venecianos"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium mb-3">Sobre Nosotros</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              La Excelencia en Cada Detalle
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              European Luxury Wall Finishes es líder en acabados decorativos de alta gama. 
              Nuestro equipo de artesanos certificados transforma espacios ordinarios en 
              obras maestras de diseño interior, combinando técnicas tradicionales europeas 
              con innovación contemporánea.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Trabajamos con arquitectos, diseñadores y propietarios exigentes que buscan 
              crear ambientes únicos y sofisticados. Cada proyecto es una expresión de 
              elegancia atemporal.
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
              Conocer Más
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
