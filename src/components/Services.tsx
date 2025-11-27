import { Palette, Sparkles, Shield, Award } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Estuco Veneciano",
    description: "Técnica tradicional italiana que crea superficies lisas y brillantes con efecto mármol natural.",
  },
  {
    icon: Sparkles,
    title: "Marmorino",
    description: "Acabado artesanal con polvo de mármol que otorga elegancia atemporal a cualquier espacio.",
  },
  {
    icon: Shield,
    title: "Texturas Decorativas",
    description: "Acabados personalizados con relieves y patrones únicos para crear ambientes distintivos.",
  },
  {
    icon: Award,
    title: "Restauración",
    description: "Recuperamos y preservamos acabados históricos con técnicas tradicionales europeas.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">Nuestros Servicios</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Artesanía de Alto Nivel
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada proyecto es una obra de arte. Utilizamos materiales premium importados 
            de Europa y técnicas transmitidas por generaciones de maestros artesanos.
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
