import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Cloud, Palette, Cpu, Database, Blocks, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Enterprise applications, SaaS products, CRM & ERP solutions tailored to your business needs",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS & Android apps, cross-platform solutions with React Native and Flutter",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS, Azure, Google Cloud solutions, CI/CD pipelines, containerization with Docker & Kubernetes",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User experience research, interface design, prototyping, and comprehensive design systems",
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Intelligent automation, predictive analytics, natural language processing, and computer vision",
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Database design, optimization, migration, and management for PostgreSQL, MongoDB, MySQL",
    },
    {
      icon: Blocks,
      title: "API Development",
      description: "RESTful APIs, GraphQL, microservices architecture, and seamless third-party integrations",
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Legacy system modernization, workflow automation, and strategic technology consulting",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive software development solutions to power your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 animate-fade-in-up bg-card/50 backdrop-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
