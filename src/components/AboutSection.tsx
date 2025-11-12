import { GraduationCap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center cyber-glow-text">
          <span className="text-primary">&gt;</span> About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Profile Photo Card */}
          <div className="relative group animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative cyber-glow rounded-lg p-6 bg-card/80 backdrop-blur-sm border-2 border-primary/30">
              <div className="relative">
                {/* Corner decorations */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary" />
                <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-primary" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-primary" />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary" />
                
                <img 
                  src={profilePhoto} 
                  alt="Vipul Kumar - Cybersecurity Specialist" 
                  className="w-full h-auto rounded-lg object-cover shadow-2xl"
                />
              </div>
              
              {/* Status indicator */}
              <div className="mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                <span className="text-sm font-mono text-primary">SECURITY_EXPERT_ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Content Card */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="cyber-glow rounded-lg p-8 bg-card/80 backdrop-blur-sm border border-primary/30 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Education & Background</h3>
              </div>
              
              <div className="text-foreground/90 space-y-4 leading-relaxed">
                <div className="pl-4 border-l-2 border-primary/30 hover:border-primary/50 transition-colors">
                  <p>
                    I'm currently pursuing my <span className="text-primary font-semibold">MCA (Hons) in Cybersecurity</span> (2025–2027) 
                    from Lovely Professional University, after completing my Bachelor of Computer Applications 
                    (Cloud and Cybersecurity) from IIMT University (2021–2024).
                  </p>
                </div>
                
                <div className="pl-4 border-l-2 border-accent/30 hover:border-accent/50 transition-colors">
                  <p>
                    I specialize in building secure networks, penetration testing, and firewall management. 
                    My focus is on creating robust security solutions that protect critical infrastructure 
                    while staying ahead of emerging threats.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="cyber-glow rounded-lg p-4 bg-card/50 backdrop-blur-sm border border-primary/20 text-center hover:border-primary/40 transition-all">
                <div className="text-2xl font-bold text-primary">2025-27</div>
                <div className="text-xs text-muted-foreground mt-1">MCA Years</div>
              </div>
              <div className="cyber-glow rounded-lg p-4 bg-card/50 backdrop-blur-sm border border-primary/20 text-center hover:border-primary/40 transition-all">
                <div className="text-2xl font-bold text-primary">2021-24</div>
                <div className="text-xs text-muted-foreground mt-1">BCA Years</div>
              </div>
              <div className="cyber-glow rounded-lg p-4 bg-card/50 backdrop-blur-sm border border-primary/20 text-center hover:border-primary/40 transition-all">
                <div className="text-2xl font-bold text-primary">∞</div>
                <div className="text-xs text-muted-foreground mt-1">Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
