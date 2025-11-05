import { Users, Trophy, Lightbulb, Target } from "lucide-react";

const ExperienceSection = () => {
  const activities = [
    {
      icon: Trophy,
      text: "Engaged in weekly Capture the Flag (CTF) challenges",
    },
    {
      icon: Target,
      text: "Developed skills in privilege escalation, packet analysis, and network exploitation",
    },
    {
      icon: Lightbulb,
      text: "Collaborated on complex problem-solving and security awareness workshops",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center cyber-glow-text">
          <span className="text-primary">&gt;</span> Experience & Leadership
        </h2>

        <div className="cyber-glow rounded-lg p-8 bg-card/50 backdrop-blur-sm border border-primary/30 animate-fade-in-up max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary">Cybersecurity Club</h3>
              <p className="text-muted-foreground">Member • Jan 2024 – Present</p>
            </div>
          </div>

          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 backdrop-blur-sm border border-accent/20"
              >
                <activity.icon className="w-5 h-5 text-accent mt-0.5" />
                <p className="text-foreground/80">{activity.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
