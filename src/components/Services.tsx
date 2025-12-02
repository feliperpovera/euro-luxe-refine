import { Palette, Droplets, Sun, Building2, Sparkles, LayoutGrid, Layers, Blend } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Venetian Plaster",
    description: "Multi-layered Italian technique creating lustrous, marble-like surfaces with incredible depth.",
  },
  {
    icon: Droplets,
    title: "Marmorino & Tadelakt",
    description: "Refined marble dust finish and waterproof Moroccan lime plaster for elegant, durable surfaces.",
  },
  {
    icon: Sun,
    title: "Lime Wash",
    description: "Breathable, eco-friendly finish with soft chalky surfaces and beautiful natural variations.",
  },
  {
    icon: Building2,
    title: "Faux Concrete",
    description: "Raw urban aesthetic of industrial concrete without the weight, perfect for modern spaces.",
  },
  {
    icon: Sparkles,
    title: "Metallic Finishes",
    description: "Glamorous copper, gold, silver, or bronze surfaces that add dramatic sophistication.",
  },
  {
    icon: LayoutGrid,
    title: "Custom Feature Walls",
    description: "Bespoke artistic treatments that transform walls into stunning focal points.",
  },
  {
    icon: Layers,
    title: "Decorative Wall Panels",
    description: "Sculptural installations with geometric or organic patterns adding architectural depth.",
  },
  {
    icon: Blend,
    title: "Designer Texture Match",
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
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-all duration-500 hover-gold-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;