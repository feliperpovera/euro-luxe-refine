import { Palette, Sparkles, Shield, Award } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Venetian Plaster",
    description: "Traditional Italian technique creating smooth, glossy surfaces with a natural marble effect.",
  },
  {
    icon: Sparkles,
    title: "Marmorino",
    description: "Artisanal finish with marble powder that brings timeless elegance to any space.",
  },
  {
    icon: Shield,
    title: "Decorative Textures",
    description: "Custom finishes with unique reliefs and patterns to create distinctive environments.",
  },
  {
    icon: Award,
    title: "Restoration",
    description: "We recover and preserve historic finishes using traditional European techniques.",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-all duration-500 hover-gold-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
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
