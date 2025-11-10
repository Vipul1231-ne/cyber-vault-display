import { Shield, Target, Zap, Lock } from "lucide-react";

const HighlightsSection = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Wireshark, Ettercap & Flipper Zero",
      description: "Experienced in Wireshark, Ettercap, and Flipper Zero simulations",
    },
    {
      icon: Target,
      title: "Network Security",
      description: "Skilled in network auditing, firewall configuration, and traffic analysis",
    },
    {
      icon: Zap,
      title: "CTF Challenges",
      description: "Active in CTF challenges and cybersecurity clubs",
    },
    {
      icon: Lock,
      title: "Offensive Security",
      description: "Passionate about offensive security and encryption defense mechanisms",
    },
  ];

  return (
    <section id="highlights" className="py-20 px-4 relative bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center cyber-glow-text">
          <span className="text-primary">&gt;</span> Core Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="cyber-glow rounded-lg p-6 bg-card/50 backdrop-blur-sm border border-primary/30 animate-fade-in-up hover:scale-[1.02] transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2">{highlight.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
