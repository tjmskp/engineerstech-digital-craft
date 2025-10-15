import { Card, CardContent } from "@/components/ui/card";
import { Users, Zap, Shield, DollarSign, Clock, Award } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Users,
      title: "Expert Team",
      description: "50+ skilled developers, designers, and consultants with proven expertise",
    },
    {
      icon: Zap,
      title: "Agile Methodology",
      description: "Flexible, transparent development process with rapid iterations",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing standards ensuring bug-free, secure applications",
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Cost-effective solutions without compromising on quality",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock maintenance and technical support",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "200+ successful projects delivered across 15+ countries",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose <span className="text-primary">engineersTech</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Your trusted partner for digital transformation and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 animate-fade-in bg-card/50 backdrop-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
