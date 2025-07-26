import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "HVAC Systems Intern",
      company: "Arete Consulting Engineers",
      location: "Bangalore, India",
      period: "Jun 2023 - Aug 2023",
      type: "Internship",
      description: "Gained hands-on experience in HVAC system design and implementation, focusing on load calculation, duct design, and equipment selection for commercial buildings.",
      responsibilities: [
        "Performed load calculations for commercial HVAC systems",
        "Designed ductwork layouts using industry-standard software",
        "Assisted in equipment selection based on building requirements",
        "Collaborated with senior engineers on system optimization",
        "Learned industry best practices for energy-efficient designs"
      ],
      skills: ["HVAC Design", "Load Calculation", "Duct Design", "AutoCAD", "Energy Efficiency"],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 ai-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience and continuous learning in 
            engineering and technology domains
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl mb-8 hover:shadow-neon transition-all duration-500 animate-slide-up"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-accent/20 rounded-lg">
                      <Building2 className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    exp.current 
                      ? 'bg-neon-green/20 text-neon-green border border-neon-green/30' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-4 text-foreground">Key Responsibilities</h4>
                <div className="space-y-3">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <div key={respIndex} className="flex items-start gap-3">
                      <ChevronRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {responsibility}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-lg font-medium mb-4 text-foreground">Skills Developed</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full border border-border/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Current Focus */}
          <div className="glass-card p-8 rounded-2xl text-center">
            <div className="inline-flex p-3 bg-gradient-ai/20 rounded-xl mb-4">
              <Building2 className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Currently Seeking Opportunities</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm actively looking for internship and entry-level positions in AI/ML, web development, 
              and software engineering where I can apply my skills and continue growing as a tech professional.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-neon-blue/20 text-neon-blue rounded-full text-sm font-medium border border-neon-blue/30">
                AI/ML Engineer
              </span>
              <span className="px-4 py-2 bg-neon-green/20 text-neon-green rounded-full text-sm font-medium border border-neon-green/30">
                Full Stack Developer
              </span>
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30">
                Software Engineer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;