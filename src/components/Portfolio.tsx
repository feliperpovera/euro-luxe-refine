import venetianPlaster from "@/assets/venetian-plaster.jpg";
import marmorinoTadelakt from "@/assets/marmorino-tadelakt.jpg";
import limeWash from "@/assets/lime-wash.jpg";
import fauxConcrete from "@/assets/faux-concrete.jpg";
import metallicFinishes from "@/assets/metallic-finishes.jpg";
import customFeatureWalls from "@/assets/custom-feature-walls.jpg";
import decorativeWallPanels from "@/assets/decorative-wall-panels.jpg";
import designerTextureMatch from "@/assets/designer-texture-match.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    image: venetianPlaster,
    title: "Venetian Plaster",
    category: "Classic Italian Finish",
    description: "A traditional multi-layered plaster technique from Venice, creating lustrous, marble-like surfaces with incredible depth and movement.",
  },
  {
    image: marmorinoTadelakt,
    title: "Marmorino & Tadelakt",
    category: "Mediterranean Elegance",
    description: "Marmorino offers a refined marble dust finish, while Tadelakt provides waterproof Moroccan lime plaster perfect for wet areas.",
  },
  {
    image: limeWash,
    title: "Lime Wash",
    category: "Natural Mineral Finish",
    description: "A breathable, eco-friendly finish that creates soft, chalky surfaces with beautiful natural variations and timeless character.",
  },
  {
    image: fauxConcrete,
    title: "Faux Concrete",
    category: "Industrial Modern",
    description: "Achieve the raw urban aesthetic of industrial concrete without the weight, offering sophisticated minimalist appeal.",
  },
  {
    image: metallicFinishes,
    title: "Metallic Finishes",
    category: "Luxurious Shimmer",
    description: "Glamorous surfaces with copper, gold, silver, or bronze effects that catch light and add dramatic sophistication.",
  },
  {
    image: customFeatureWalls,
    title: "Custom Feature Walls",
    category: "Statement Design",
    description: "Bespoke artistic treatments that transform walls into stunning focal points, tailored to your unique vision.",
  },
  {
    image: decorativeWallPanels,
    title: "Decorative Wall Panels",
    category: "3D Texture Design",
    description: "Sculptural wall installations with geometric or organic patterns that add depth and architectural interest.",
  },
  {
    image: designerTextureMatch,
    title: "Designer Texture Match",
    category: "Custom Matching",
    description: "Expert color and texture matching services to seamlessly integrate new finishes with existing design elements.",
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
            Our Techniques
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our range of artisanal wall finishes, each crafted with 
            premium materials and time-honored techniques.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project) => (
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
              <div className="p-5">
                <span className="text-primary text-xs font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-serif font-semibold text-foreground mt-2 mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover-gold-glow">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;