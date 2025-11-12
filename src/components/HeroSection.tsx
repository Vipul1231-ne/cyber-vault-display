import { Shield, Terminal, Lock, Code } from "lucide-react";

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
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            {/* Hexagonal cyber frame */}
            <div className="absolute inset-0 cyber-glow">
              <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm" 
                   style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}>
                {/* Inner hexagon */}
                <div className="absolute inset-2 bg-card/80 backdrop-blur-sm border-2 border-primary/50"
                     style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}>
                  {/* Icon grid */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary animate-glow-pulse" style={{ animationDelay: "0s" }} />
                      <Terminal className="w-6 h-6 md:w-8 md:h-8 text-accent animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
                      <Lock className="w-6 h-6 md:w-8 md:h-8 text-accent animate-glow-pulse" style={{ animationDelay: "1s" }} />
                      <Code className="w-6 h-6 md:w-8 md:h-8 text-primary animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-primary" />
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
