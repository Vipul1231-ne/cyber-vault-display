import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Calendar, Users } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Man-in-the-Middle (Evil Twin) Attack Simulation",
      role: "Team Co-Lead",
      period: "Aug 2024 – Dec 2024",
      description: [
        "Executed Evil Twin attacks on Kali Linux, Windows, and Flipper Zero by configuring rogue access points, ARP poisoning, and wireless drivers for traffic interception",
        "Built fake captive portal mimicking CSULB SSO to capture credentials, redirecting traffic via iptables and analyzing packets with Ettercap/Wireshark",
        "Evaluated SSL/TLS interception limitations and documented encryption's role in preventing credential theft",
        "Authored risk mitigation report covering VPN adoption, HTTPS/SSH enforcement, and static ARP; presented findings at Cybersecurity Club showcase"
      ],
      technologies: ["Kali Linux", "Flipper Zero", "Wireshark", "Ettercap", "HTML/CSS/JS", "iptables"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 cyber-glow-text">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            Hands-on cybersecurity research and offensive security simulations
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            >
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{project.role}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {project.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <h4 className="text-sm font-semibold mb-3 text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
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

export default ProjectsSection;
