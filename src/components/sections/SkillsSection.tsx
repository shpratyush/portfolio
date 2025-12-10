import { useState } from 'react';
import { Server, Layout, Wrench, Users } from 'lucide-react';

const skillCategories = [
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'PHP', level: 95 },
      { name: 'Laravel', level: 98 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'MySQL', level: 88 },
      { name: 'Legacy Migration', level: 92 },
      { name: 'Code Refactoring', level: 95 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'Vue.js', level: 90 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Vuetify', level: 85 },
      { name: 'HTML5/CSS3', level: 95 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 92 },
      { name: 'Docker', level: 80 },
      { name: 'Linux', level: 85 },
      { name: 'CI/CD', level: 78 },
      { name: 'Agile/Scrum', level: 90 },
      { name: 'Code Review', level: 95 },
    ],
  },
  {
    id: 'leadership',
    title: 'Leadership & Management',
    icon: Users,
    skills: [
      { name: 'Team Management', level: 90 },
      { name: 'Project Leadership', level: 92 },
      { name: 'Mentoring', level: 95 },
      { name: 'Client Communication', level: 88 },
      { name: 'QA Testing', level: 85 },
      { name: 'Deployment Management', level: 90 },
    ],
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('backend');

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/20 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-mono text-sm mb-4 block">// Skills</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(156_100%_50%/0.3)]'
                    : 'bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up">
          {activeSkills?.skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card p-6 hover-lift"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="font-mono text-primary text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center animate-fade-up">
          <p className="text-muted-foreground mb-4">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Webpack', 'NPM', 'Composer', 'Redis', 'Queue Systems', 'WebSockets', 'PHPUnit', 'Pest'].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground text-sm border border-border/50 hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
