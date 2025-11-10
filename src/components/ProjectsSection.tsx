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
        "Designed and executed Evil Twin attacks across Kali Linux, Windows, and Flipper Zero platforms, configuring rogue access points, ARP cache poisoning, and custom wireless drivers to enable monitor mode for live traffic interception.",
        "Developed a fake captive portal (HTML/CSS/JS) mimicking CSULB's SSO login, successfully capturing credentials in a controlled environment; redirected traffic via iptables and analyzed packet data with Ettercap/Wireshark.",
        "Evaluated limitations of SSL/TLS interception and documented findings to highlight the importance of encryption in protecting against credential theft.",
        "Authored a risk mitigation report (VPN adoption, HTTPS/SSH enforcement, static ARP) and presented results at the Cybersecurity Club showcase, enhancing awareness of Wi-Fi exploitation risks."
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
