import { Palette, Code, Brain, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing user-friendly and visually engaging interfaces tailored to client needs and user expectations.",
      features: [
        "User-Centered Design",
        "Responsive Layouts", 
        "Design Systems",
        "Prototyping & Wireframing"
      ],
      color: "text-neon-blue",
      gradient: "from-neon-blue/20 to-transparent"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack responsive web solutions using modern technologies and design principles.",
      features: [
        "React.js Applications",
        "Backend Development",
        "Database Integration",
        "Performance Optimization"
      ],
      color: "text-neon-green", 
      gradient: "from-neon-green/20 to-transparent"
    },
    {
      icon: Brain,
      title: "AI/ML Solutions",
      description: "Building intelligent applications using machine learning algorithms and data science techniques.",
      features: [
        "Predictive Modeling",
        "Data Analysis",
        "ML Pipeline Development",
        "AI Integration"
      ],
      color: "text-accent",
      gradient: "from-accent/20 to-transparent"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 ai-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From conceptual design to deployment, I offer comprehensive solutions 
            that blend creativity with technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group glass-card p-8 rounded-2xl hover:shadow-neon transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Service Header */}
              <div className="relative mb-6">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-4`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${service.color.replace('text-', 'bg-')}`} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                variant="ghost" 
                className="w-full group-hover:bg-card/80 transition-all duration-300"
              >
                Learn More
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Have a project in <span className="gradient-text">mind?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's transform your vision into captivating reality. I'd make your digital presence 
              stand out whether it's a new website or a AI/ML application.
            </p>
            <Button variant="neon" size="lg">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;