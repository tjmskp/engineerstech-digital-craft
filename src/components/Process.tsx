import { Lightbulb, Pencil, Code2, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Lightbulb,
      number: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, define project scope, and create a comprehensive development roadmap.",
    },
    {
      icon: Pencil,
      number: "02",
      title: "Design & Prototyping",
      description: "Our designers craft intuitive UI/UX designs and interactive prototypes for your approval.",
    },
    {
      icon: Code2,
      number: "03",
      title: "Development & Testing",
      description: "Agile development sprints with continuous integration, rigorous quality assurance and testing.",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Deployment & Support",
      description: "Seamless launch to production with ongoing maintenance, updates, and 24/7 technical support.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven methodology to transform your vision into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="relative bg-card rounded-2xl p-8 border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
