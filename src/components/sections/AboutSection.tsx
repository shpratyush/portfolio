import { Code2, Users, Rocket, Award } from 'lucide-react';
import StatCounter from '../StatCounter';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-mono text-sm mb-4 block">// About Me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Turning Ideas Into <span className="gradient-text">Reality</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer who loves crafting elegant solutions and leading teams to success
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - About Content */}
          <div className="space-y-6 animate-fade-up">
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Code2 className="text-primary" size={24} />
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a Full Stack Developer and Technical Leader based in Ahmedabad, India, with over 3 years
                of experience in building robust web applications. I specialize in{' '}
                <span className="text-primary">Laravel</span> and{' '}
                <span className="text-primary">Vue.js</span>, and have a proven track record of delivering
                high-quality projects.
              </p>
            </div>

            <div className="glass-card p-6 space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Users className="text-primary" size={24} />
                What I Do
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently serving as a Project Lead & Development Manager, I balance hands-on coding with
                leadership responsibilities. I lead development teams, conduct code reviews, manage
                deployments, and mentor junior developers. I've successfully guided{' '}
                <span className="text-primary">15+ developers</span> in their professional growth.
              </p>
            </div>

            <div className="glass-card p-6 space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Rocket className="text-primary" size={24} />
                My Expertise
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in large-scale Laravel refactoring projects, upgrading legacy systems from
                Laravel 5.8 to the latest versions. I excel at building enterprise web applications with
                complex business logic, e-commerce platforms, and custom plugin development.
              </p>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="space-y-8 animate-fade-up delay-200">
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 text-center hover-lift">
                <StatCounter end={3} suffix="+" label="Years Experience" />
              </div>
              <div className="glass-card p-6 text-center hover-lift">
                <StatCounter end={20} suffix="+" label="Projects Delivered" />
              </div>
              <div className="glass-card p-6 text-center hover-lift">
                <StatCounter end={15} suffix="+" label="Developers Mentored" />
              </div>
              <div className="glass-card p-6 text-center hover-lift">
                <StatCounter end={100} suffix="%" label="Client Satisfaction" />
              </div>
            </div>

            {/* Quality Badge */}
            <div className="glass-card p-6 border-primary/30 animate-glow-pulse">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Award className="text-primary" size={32} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Quality Focused</h4>
                  <p className="text-muted-foreground text-sm">
                    Committed to clean code, best practices, and exceptional results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
