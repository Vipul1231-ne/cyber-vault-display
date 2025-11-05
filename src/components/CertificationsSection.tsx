import { Award, BookOpen, Cloud, Terminal } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      icon: BookOpen,
      title: "Google Data Analytics Specialization",
      issuer: "Google",
    },
    {
      icon: Cloud,
      title: "Introduction to Cloud",
      issuer: "Cloud Computing",
    },
    {
      icon: Terminal,
      title: "Red Hat Linux Training",
      issuer: "Red Hat",
    },
    {
      icon: Award,
      title: "Introduction to Pentesting Fundamentals",
      issuer: "TryHackMe",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center cyber-glow-text">
          <span className="text-primary">&gt;</span> Certifications & Training
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cyber-glow rounded-lg p-6 bg-card/50 backdrop-blur-sm border border-primary/30 animate-fade-in-up hover:scale-105 transition-transform duration-300 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 border border-primary/30 mb-4">
                <cert.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
