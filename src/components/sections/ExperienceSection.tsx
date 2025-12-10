import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: 'Project Lead & Development Manager',
    period: '2024 - Present',
    type: 'Current Role',
    description: 'Leading Laravel development teams and managing multiple concurrent projects with a focus on quality and delivery.',
    highlights: [
      'Leading Laravel development teams and managing multiple concurrent projects',
      'Managing both hands-on coding and leadership responsibilities',
      'Conducting comprehensive code reviews, QA testing, and deployment management',
      'Spearheading large-scale Laravel refactoring projects and system upgrades',
      'Mentoring trainees and junior developers in web development fundamentals',
      'Preparing detailed technical task descriptions and managing development processes',
      'Maintaining client communication and ensuring project deliverables meet objectives',
    ],
    tags: ['Laravel', 'Team Leadership', 'Code Review', 'Client Management'],
  },
  {
    title: 'Full Stack Developer',
    period: '2023 - 2025',
    type: 'Mid-Level',
    description: 'Developed robust web applications using PHP, Laravel, and Vue.js with a focus on scalable architecture.',
    highlights: [
      'Developed robust web applications using PHP, Laravel, and Vue.js',
      'Built responsive frontend interfaces with Bootstrap, Tailwind CSS, and Vuetify',
      'Integrated complex business logic and database operations with MySQL',
      'Collaborated with senior team members on code architecture and best practices',
      'Participated in agile development processes and continuous learning',
    ],
    tags: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS'],
  },
  {
    title: 'Junior Full Stack Developer',
    period: '2022 - 2023',
    type: 'Entry Level',
    description: 'Started my professional journey building web applications and learning industry best practices.',
    highlights: [
      'Started career building web applications with PHP and JavaScript',
      'Learned industry best practices for version control and collaborative development',
      'Contributed to both frontend and backend development tasks',
      'Gained experience with database design and API development',
      'Built foundation in Laravel framework and modern web development practices',
    ],
    tags: ['PHP', 'JavaScript', 'Git', 'Laravel', 'API Development'],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-mono text-sm mb-4 block">// Experience</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of growth, learning, and delivering impactful solutions
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 animate-fade-up ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background z-10 shadow-[0_0_20px_hsl(156_100%_50%/0.5)]" />

              {/* Content Card */}
              <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-card p-6 hover-lift group">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      {exp.type}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Briefcase className="text-primary" size={20} />
                    {exp.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.slice(0, 4).map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="text-primary shrink-0 mt-0.5" size={14} />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded bg-secondary/50 text-xs font-mono text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
