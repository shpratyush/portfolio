import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="font-mono text-lg font-bold">
            <span className="text-primary">&lt;</span>
            <span className="text-foreground">PS</span>
            <span className="text-primary">/&gt;</span>
          </a>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Pratyush Sharma. Built with{' '}
            <Heart size={14} className="text-primary fill-primary" /> and lots of coffee.
          </p>

          {/* Tech Stack */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span className="font-mono">React</span>
            <span className="text-primary">+</span>
            <span className="font-mono">Tailwind</span>
            <span className="text-primary">+</span>
            <span className="font-mono">TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
