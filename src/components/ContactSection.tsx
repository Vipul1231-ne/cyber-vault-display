import { Mail, Terminal } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 cyber-glow-text">
          <span className="text-primary">&gt;</span> Get In Touch
        </h2>

        <div className="cyber-glow rounded-lg p-8 bg-card/50 backdrop-blur-sm border border-primary/30 animate-fade-in-up">
          <Terminal className="w-12 h-12 text-primary mx-auto mb-6 animate-glow-pulse" />
          
          <p className="text-lg text-foreground/80 mb-8">
            Interested in collaborating on cybersecurity projects or discussing security solutions? 
            Let's connect and build something secure together.
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-lg mb-8">
            <Mail className="w-5 h-5 text-primary" />
            <a 
              href="mailto:vipultomar47@gmail.com"
              className="text-primary font-semibold hover:text-accent transition-colors"
            >
              vipultomar47@gmail.com
            </a>
          </div>

          <div className="pt-6 border-t border-primary/20">
            <p className="text-sm text-muted-foreground font-mono">
              $ echo "Security is not a product, but a process." | ./secure_future.sh
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-16">
        <p className="text-sm text-muted-foreground">
          © 2025 Vipul Kumar. All rights reserved. | Built with React & Tailwind CSS
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
