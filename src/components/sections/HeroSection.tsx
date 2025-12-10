import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import AnimatedCodeEditor from '../AnimatedCodeEditor';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 px-4"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 animate-glow-pulse">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Available for Projects</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Hi, I'm </span>
                <span className="gradient-text">Pratyush Sharma</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
                Full Stack Developer & Technical Leader
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Building next-generation web applications with{' '}
              <span className="text-primary font-medium">Laravel</span> &{' '}
              <span className="text-primary font-medium">Vue.js</span>. Passionate about clean code,
              innovative solutions, and leading high-performing development teams.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(156_100%_50%/0.4)] hover:-translate-y-0.5"
              >
                Get In Touch
                <Mail size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg transition-all duration-300 hover:border-primary hover:text-primary"
              >
                Learn More
                <ArrowDown size={18} className="animate-bounce" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-muted-foreground text-sm">Find me on:</span>
              <a
                href="http://linkedin.com/in/pratyush-sharma-ps"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:shpratyush5@gmail.com"
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Code Editor */}
          <div className="hidden lg:flex justify-center animate-fade-up delay-200">
            <div className="relative">
              {/* Glow effect behind editor */}
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-3xl" />
              <AnimatedCodeEditor />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-xs">Scroll Down</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
};

export default HeroSection;
