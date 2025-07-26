import { Code2, Database, Brain, BarChart3 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      color: "text-neon-blue",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C#", level: 75 },
      ]
    },
    {
      title: "Frontend",
      icon: Code2,
      color: "text-neon-green",
      skills: [
        { name: "React.js", level: 88 },
        { name: "HTML/CSS", level: 92 },
        { name: "Tailwind CSS", level: 85 },
        { name: "JavaScript", level: 85 },
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      color: "text-accent",
      skills: [
        { name: "Node.js", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 85 },
        { name: "Go", level: 70 },
      ]
    },
    {
      title: "AI/ML & Data",
      icon: Brain,
      color: "text-neon-purple",
      skills: [
        { name: "Machine Learning", level: 88 },
        { name: "Data Structures", level: 85 },
        { name: "Scikit-learn", level: 82 },
        { name: "Streamlit", level: 80 },
      ]
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      color: "text-primary",
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Tableau", level: 80 },
        { name: "Data Analysis", level: 88 },
        { name: "OOP", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 ai-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI/ML, full-stack development, and data visualization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="glass-card p-6 rounded-xl hover:shadow-neon transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-gradient-ai/20 ${category.color}`}>
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-ai rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute top-20 right-10 opacity-20">
          <div className="w-16 h-16 bg-neon-blue/20 rounded-lg flex items-center justify-center floating-animation">
            <Brain className="h-8 w-8 text-neon-blue" />
          </div>
        </div>
        <div className="absolute bottom-20 left-10 opacity-20">
          <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center floating-animation" style={{ animationDelay: '2s' }}>
            <Code2 className="h-6 w-6 text-neon-green" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;