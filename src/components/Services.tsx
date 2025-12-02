import venetianPlaster from "@/assets/venetian-plaster.jpg";
import marmorinoTadelakt from "@/assets/marmorino-tadelakt.jpg";
import limeWash from "@/assets/lime-wash.jpg";
import fauxConcrete from "@/assets/faux-concrete.jpg";
import metallicFinishes from "@/assets/metallic-finishes.jpg";
import customFeatureWalls from "@/assets/custom-feature-walls.jpg";
import decorativeWallPanels from "@/assets/decorative-wall-panels.jpg";
import designerTextureMatch from "@/assets/designer-texture-match.jpg";

const services = [
  {
    image: venetianPlaster,
    title: "Venetian Plaster",
    category: "Classic Italian Finish",
    description: "Multi-layered Italian technique creating lustrous, marble-like surfaces with incredible depth.",
  },
  {
    image: marmorinoTadelakt,
    title: "Marmorino & Tadelakt",
    category: "Mediterranean Elegance",
    description: "Refined marble dust finish and waterproof Moroccan lime plaster for elegant, durable surfaces.",
  },
  {
    image: limeWash,
    title: "Lime Wash",
    category: "Natural Mineral Finish",
    description: "Breathable, eco-friendly finish with soft chalky surfaces and beautiful natural variations.",
  },
  {
    image: fauxConcrete,
    title: "Faux Concrete",
    category: "Industrial Modern",
    description: "Raw urban aesthetic of industrial concrete without the weight, perfect for modern spaces.",
  },
  {
    image: metallicFinishes,
    title: "Metallic Finishes",
    category: "Luxurious Shimmer",
    description: "Glamorous copper, gold, silver, or bronze surfaces that add dramatic sophistication.",
  },
  {
    image: customFeatureWalls,
    title: "Custom Feature Walls",
    category: "Statement Design",
    description: "Bespoke artistic treatments that transform walls into stunning focal points.",
  },
  {
    image: decorativeWallPanels,
    title: "Decorative Wall Panels",
    category: "3D Texture Design",
    description: "Sculptural installations with geometric or organic patterns adding architectural depth.",
  },
  {
    image: designerTextureMatch,
    title: "Designer Texture Match",
    category: "Custom Matching",
    description: "Expert color and texture matching to seamlessly integrate with existing design elements.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">Our Services</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            High-Level Craftsmanship
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every project is a work of art. We use premium materials imported 
            from Europe and techniques passed down through generations of master artisans.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-secondary rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover-gold-glow"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5">
                <span className="text-primary text-xs font-medium uppercase tracking-wider">
                  {service.category}
                </span>
                <h3 className="text-lg font-serif font-semibold text-foreground mt-2 mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
