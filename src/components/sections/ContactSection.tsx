import { Mail, Linkedin, MessageCircle, MapPin, Send } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Gmail',
    value: 'shpratyush5@gmail.com',
    href: 'mailto:shpratyush5@gmail.com',
    color: 'hover:border-red-400 hover:text-red-400',
  },
  {
    icon: Mail,
    label: 'Yahoo',
    value: 'pratyush_s@yahoo.in',
    href: 'mailto:pratyush_s@yahoo.in',
    color: 'hover:border-purple-400 hover:text-purple-400',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'pratyush-sharma-ps',
    href: 'http://linkedin.com/in/pratyush-sharma-ps',
    color: 'hover:border-blue-400 hover:text-blue-400',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with me',
    href: 'https://wa.me/918853217658?text=Hi%2C%20I%20want%20to%20discuss%20my%20idea%20with%20you...',
    color: 'hover:border-green-400 hover:text-green-400',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/20 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-mono text-sm mb-4 block">// Contact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-6 animate-fade-up">
            <h3 className="text-xl font-semibold text-foreground mb-6">Get in Touch</h3>
            
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card p-4 flex items-center gap-4 transition-all duration-300 border border-border/50 hover:-translate-y-1 hover:shadow-lg group ${method.color}`}
                >
                  <div className="p-3 rounded-lg bg-secondary/50 group-hover:bg-primary/20 transition-colors">
                    <Icon size={24} className="text-muted-foreground group-hover:text-inherit transition-colors" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{method.label}</span>
                    <p className="font-medium text-foreground">{method.value}</p>
                  </div>
                </a>
              );
            })}

            {/* Location */}
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-secondary/50">
                <MapPin size={24} className="text-muted-foreground" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Location</span>
                <p className="font-medium text-foreground">Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="animate-fade-up delay-200">
            <div className="glass-card p-8 border-primary/30 relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="text-primary font-medium">Available for Projects</span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Start Your Next Project?
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Whether you need a complete web application, legacy system upgrade, or technical leadership
                  for your team, I'm here to help. Let's discuss your requirements and create something
                  exceptional together.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/918853217658?text=Hi%2C%20I%20want%20to%20discuss%20my%20idea%20with%20you..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(156_100%_50%/0.4)] hover:-translate-y-0.5"
                  >
                    <MessageCircle size={20} />
                    Start a Conversation on WhatsApp
                  </a>

                  <a
                    href="mailto:shpratyush5@gmail.com"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 border border-border text-foreground font-medium rounded-lg transition-all duration-300 hover:border-primary hover:text-primary"
                  >
                    <Send size={20} />
                    Send an Email
                  </a>
                </div>

                <p className="text-center text-muted-foreground text-sm mt-6">
                  I typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
