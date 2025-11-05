import { GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center cyber-glow-text">
          <span className="text-primary">&gt;</span> About Me
        </h2>

        <div className="cyber-glow rounded-lg p-8 bg-card/50 backdrop-blur-sm border border-primary/30 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-7 h-7 text-primary" />
            <h3 className="text-2xl font-semibold text-primary">Education & Background</h3>
          </div>
          <div className="text-foreground/80 space-y-4 leading-relaxed text-lg">
            <p>
              I'm currently pursuing my <span className="text-primary font-semibold">MCA (Hons) in Cybersecurity</span> (2025–2027) 
              from Lovely Professional University, after completing my Bachelor of Computer Applications 
              (Cloud and Cybersecurity) from IIMT University (2021–2024).
            </p>
            <p>
              I specialize in building secure networks, penetration testing, and firewall management. 
              My focus is on creating robust security solutions that protect critical infrastructure 
              while staying ahead of emerging threats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
