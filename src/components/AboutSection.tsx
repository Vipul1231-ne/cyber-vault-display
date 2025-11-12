import { GraduationCap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center cyber-glow-text">
          <span className="text-primary">&gt;</span> About Me
        </h2>

        <div className="cyber-glow rounded-lg p-8 bg-card/50 backdrop-blur-sm border border-primary/30 animate-fade-in-up">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="cyber-glow rounded-lg p-1 bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm border-2 border-primary/50">
                <img 
                  src={profilePhoto} 
                  alt="Vipul Kumar - Cybersecurity Specialist" 
                  className="w-48 h-48 md:w-56 md:h-56 rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
