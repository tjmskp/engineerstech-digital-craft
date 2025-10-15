import { SiReact, SiAngular, SiVuedotjs, SiTypescript, SiNodedotjs, SiPython, SiDotnet, SiPhp, SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiAmazon, SiGooglecloud, SiDocker, SiKubernetes } from "react-icons/si";
import { Cloud } from "lucide-react";

const TechStack = () => {
  const technologies = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: ".NET", icon: SiDotnet, color: "#512BD4" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "AWS", icon: SiAmazon, color: "#FF9900" },
    { name: "Azure", icon: Cloud, color: "#0078D4" },
    { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  ];

  return (
    <section id="tech-stack" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-primary">Technology Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We leverage cutting-edge technologies to build robust, scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-8 items-center justify-items-center">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-3 transition-all duration-300 hover:scale-110 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="h-16 w-16 rounded-xl bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <tech.icon className="h-10 w-10" style={{ color: tech.color }} />
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
