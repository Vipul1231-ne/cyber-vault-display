import { Shield, Code, Monitor, Wrench } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: "Cybersecurity & Networking",
      skills: [
        "Wireshark",
        "Ettercap",
        "Firewall Configuration (iptables)",
        "Secure Email (S/MIME)",
        "SSH/TLS",
      ],
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "C", "C++", "C#"],
    },
    {
      icon: Monitor,
      title: "Operating Systems",
      skills: ["Windows (10, 11)", "Linux (BASH)", "Kali Linux"],
    },
    {
      icon: Wrench,
      title: "Software & Tools",
      skills: ["Visual Studio Code", "Git", "Microsoft Office Suite"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center cyber-glow-text">
          <span className="text-primary">&gt;</span> Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="cyber-glow rounded-lg p-6 bg-card/50 backdrop-blur-sm border border-primary/30 animate-fade-in-up hover:scale-[1.02] transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm bg-secondary/50 backdrop-blur-sm border border-accent/30 rounded-md text-foreground/90 hover:bg-accent/20 hover:border-accent/50 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
