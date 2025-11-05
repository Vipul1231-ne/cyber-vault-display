import { Award, BookOpen, Cloud, Terminal, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import googleCert from "@/assets/google-data-analytics-cert.png";
import hackerRankCert from "@/assets/hackerrank-sql-cert.png";
import iitCert from "@/assets/iit-cloud-cert.png";

const CertificationsSection = () => {
  const certifications = [
    {
      icon: BookOpen,
      title: "Google Data Analytics Specialization",
      issuer: "Google",
      image: googleCert,
      link: "https://coursera.org/verify/professional-cert/LD6QL8AZUJHQ",
    },
    {
      icon: Terminal,
      title: "SQL (Basic)",
      issuer: "HackerRank",
      image: hackerRankCert,
    },
    {
      icon: Cloud,
      title: "Introduction to Cloud",
      issuer: "IIT Kanpur",
      image: iitCert,
    },
    {
      icon: Award,
      title: "Red Hat Linux Training",
      issuer: "Red Hat",
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
            <div key={index}>
              {cert.image ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <div
                      className="cyber-glow rounded-lg p-6 bg-card/50 backdrop-blur-sm border border-primary/30 animate-fade-in-up hover:scale-105 transition-transform duration-300 text-center cursor-pointer group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="inline-flex p-4 rounded-full bg-primary/10 border border-primary/30 mb-4 group-hover:bg-primary/20 transition-colors">
                        <cert.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                      <div className="flex items-center justify-center gap-1 text-xs text-primary">
                        <ExternalLink className="w-3 h-3" />
                        <span>View Certificate</span>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl bg-card/95 backdrop-blur-sm border-primary/30">
                    <div className="relative">
                      <img
                        src={cert.image}
                        alt={`${cert.title} Certificate`}
                        className="w-full h-auto rounded-lg"
                      />
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Verify Certificate
                        </a>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <div
                  className="cyber-glow rounded-lg p-6 bg-card/50 backdrop-blur-sm border border-primary/30 animate-fade-in-up hover:scale-105 transition-transform duration-300 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex p-4 rounded-full bg-primary/10 border border-primary/30 mb-4">
                    <cert.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
