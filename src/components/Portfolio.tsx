import interiorBedroom from "@/assets/interior-bedroom.jpg";
import interiorLiving from "@/assets/interior-living.jpg";
import interiorDining from "@/assets/interior-dining.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    image: interiorBedroom,
    title: "Residencia Privada",
    category: "Estuco Veneciano",
    description: "Suite principal con acabados en tonos cálidos que crean una atmósfera de serenidad y lujo.",
  },
  {
    image: interiorLiving,
    title: "Penthouse Moderno",
    category: "Marmorino",
    description: "Espacios sociales con acabado marmóreo que refleja la luz natural de forma espectacular.",
  },
  {
    image: interiorDining,
    title: "Villa Clásica",
    category: "Restauración",
    description: "Recuperación de acabados históricos en comedor formal de residencia patrimonial.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de nuestros trabajos más exclusivos que demuestran 
            nuestra pasión por la perfección y el detalle artesanal.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-secondary rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <span className="text-primary text-xs font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-serif font-semibold text-foreground mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {project.description}
                </p>
                <Button
                  variant="link"
                  className="text-primary p-0 mt-4 hover:text-gold-light"
                >
                  Ver Proyecto <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover-gold-glow">
            Ver Todos los Proyectos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
