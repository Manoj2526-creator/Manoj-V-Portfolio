import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import todoImage from '@/assets/project-todo.jpg';
import votingImage from '@/assets/project-voting.jpg';
import realestateImage from '@/assets/project-realestate.jpg';
import portfolioImage from '@/assets/project-portfolio.jpg';
import bankingImage from '@/assets/project-banking.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Frontend', 'Backend', 'ML/AI'];

  const projects = [
    {
      title: "Task Management System",
      description: "A comprehensive task management application with user authentication, real-time updates, and team collaboration features.",
      image: todoImage,
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "Frontend",
      github: "https://github.com/Manoj2526-creator/task-management",
      live: "https://lovable.dev/projects/24ee7c90-c2aa-499b-8daa-5bab811e4543",
      featured: false
    },
    {
      title: "E-Voting Platform",
      description: "Secure digital voting system with blockchain integration, admin dashboard, and real-time result visualization.",
      image: votingImage, 
      technologies: ["React", "Node.js", "PostgreSQL", "Web3", "Chart.js"],
      category: "Backend",
      github: "https://github.com/Manoj2526-creator/e-voting-platform",
      live: "https://lovable.dev/projects/aea41494-af81-4270-a4c0-65a1b9d21431",
      featured: true
    },
    {
      title: "Property Price Predictor",
      description: "Machine learning application that predicts real estate prices using linear regression and decision trees with data visualization.",
      image: realestateImage,
      technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Plotly"],
      category: "ML/AI", 
      github: "https://github.com/Manoj2526-creator/property-price-predictor",
      live: "https://lovable.dev/projects/a8a6d560-150a-453a-ac18-0ec695ba5192",
      featured: true
    },
    {
      title: "Developer Portfolio",
      description: "Responsive portfolio website built with modern web technologies, featuring smooth animations and dark/light theme.",
      image: portfolioImage,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Frontend",
      github: "https://github.com/Manoj2526-creator/portfolio",
      live: "https://manoj-portfolio.vercel.app",
      featured: false
    },
    {
      title: "Banking System",
      description: "Comprehensive banking management system with account management, transaction processing, loan management, and detailed documentation manuals.",
      image: bankingImage,
      technologies: ["Java", "Spring Boot", "MySQL", "REST API", "JWT"],
      category: "Backend",
      github: "https://github.com/Manoj2526-creator/banking-system",
      live: "https://banking-system-demo.herokuapp.com",
      featured: true
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 ai-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work spanning web development, AI/ML applications, 
            and innovative digital solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "neon" : "hero"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className="transition-all duration-300"
            >
              <Filter className="mr-2 h-4 w-4" />
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              className={`group glass-card rounded-2xl overflow-hidden hover:shadow-neon transition-all duration-500 animate-slide-up ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <Button variant="glass" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="hero" size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <a href="https://github.com/Manoj2526-creator" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;