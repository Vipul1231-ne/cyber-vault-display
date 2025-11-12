import { Shield, Terminal, Lock } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scanline absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Shield className="absolute top-1/4 left-1/4 w-8 h-8 text-primary/20 animate-float" style={{ animationDelay: "0s" }} />
        <Terminal className="absolute top-1/3 right-1/4 w-6 h-6 text-accent/20 animate-float" style={{ animationDelay: "1s" }} />
        <Lock className="absolute bottom-1/3 left-1/3 w-7 h-7 text-primary/20 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <div className="inline-block mb-6">
          <div className="cyber-glow rounded-full p-1 bg-card/50 backdrop-blur-sm border-2 border-primary/50">
            <img 
              src={profilePhoto} 
              alt="Vipul Kumar - Cybersecurity Specialist" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 cyber-glow-text">
          Vipul Kumar
        </h1>
        
        <div className="text-xl md:text-2xl text-muted-foreground mb-6 space-y-2">
          <p className="text-primary font-semibold">Cybersecurity Specialist</p>
          <p>Cloud Security Engineer | Penetration Testing Enthusiast</p>
        </div>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-4 italic">
          "I craft secure systems where technology meets protection."
        </p>
        
        <p className="text-sm text-muted-foreground">
          "With great power comes great electricity bill." — Dr. Who
        </p>

        {/* Terminal-style indicator */}
        <div className="mt-12 inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg">
          <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
          <span className="text-sm font-mono text-primary">SYSTEM_READY</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
