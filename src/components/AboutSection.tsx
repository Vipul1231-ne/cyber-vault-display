import { GraduationCap, Shield, Zap, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Shield,
      text: "Experienced in Wireshark, Ettercap, and Flipper Zero simulations",
    },
    {
      icon: Target,
      text: "Skilled in network auditing, firewall configuration, and traffic analysis",
    },
    {
      icon: Zap,
      text: "Active in CTF challenges and cybersecurity clubs",
    },
    {
      icon: GraduationCap,
      text: "Passionate about offensive security and encryption defense mechanisms",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center cyber-glow-text">
          <span className="text-primary">&gt;</span> About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bio Card */}
          <div className="cyber-glow rounded-lg p-6 bg-card/50 backdrop-blur-sm border border-primary/30 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-primary">Education & Background</h3>
            </div>
            <div className="text-foreground/80 space-y-4 leading-relaxed">
              <p>
                I'm currently pursuing my <span className="text-primary font-semibold">MCA (Hons) in Cybersecurity</span> (2025–2027) 
                from Lovely Professional University, after completing my Bachelor of Computer Applications 
                (Cloud and Cybersecurity) from IIMT University (2021–2024).
              </p>
              <p>
                I specialize in building secure networks, penetration testing, and firewall management.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:cyber-glow"
              >
                <div className="mt-1">
                  <highlight.icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-foreground/80">{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
