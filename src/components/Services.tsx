import grasselloDiCalce from "@/assets/grassello-ceiling.png";
import marmorinoTadelakt from "@/assets/marmorino-new.png";
import limeWash from "@/assets/lime-wash.jpg";
import fauxConcrete from "@/assets/microcement.png";
import metallicFinishes from "@/assets/metallic-finishes.jpg";
import decorativeWallPanels from "@/assets/bamboo-texture.png";
import customFeatureWalls from "@/assets/alligator-skin.png";
import designerTextureMatch from "@/assets/custom-walls.png";

const services = [
  {
    image: grasselloDiCalce,
    title: "Grassello",
    category: "Classic Italian Finish",
    description: "Polished Italian plaster that creates smooth, marble-like surfaces with elegant depth—perfect for luxury interior wall finishes.",
  },
  {
    image: marmorinoTadelakt,
    title: "Marmorino",
    category: "Mediterranean Elegance",
    description: "Traditional lime-based Venetian finish offering refined texture, natural movement, and a high-end matte sheen ideal for exclusive spaces.",
  },
  {
    image: limeWash,
    title: "Lime Wash",
    category: "Natural Mineral Finish",
    description: "Breathable, eco-friendly mineral coating delivering soft tonal variations and a timeless European aesthetic for premium walls.",
  },
  {
    image: fauxConcrete,
    title: "Microcement",
    category: "Contemporary Seamless Look",
    description: "Modern, seamless surface with high durability and a refined matte texture—ideal for bathrooms, kitchens, and luxury architectural designs.",
  },
  {
    image: metallicFinishes,
    title: "Metallic Finishes",
    category: "Luxurious Shimmer",
    description: "Copper, gold, silver, and bronze effects that add dramatic sophistication and shimmering depth to feature walls and high-end interiors.",
  },
  {
    image: decorativeWallPanels,
    title: "Bamboo Texture",
    category: "Organic Texture Design",
    description: "Nature-inspired textured finish that recreates the look of bamboo fibers, adding warmth, dimension, and artisanal character to any space.",
  },
  {
    image: customFeatureWalls,
    title: "Alligator Skin Effect",
    category: "Artistic Statement Finish",
    description: "Bold, embossed texture mimicking alligator skin for dramatic, high-impact feature walls in luxury residential and commercial projects.",
  },
  {
    image: designerTextureMatch,
    title: "Custom Walls",
    category: "Statement Design",
    description: "Bespoke wall finishes handcrafted to suit your vision—combining Italian techniques, unique textures, and premium materials for luxury spaces.",
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
