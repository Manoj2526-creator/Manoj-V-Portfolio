import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden ai-grid">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-ai rounded-full blur-3xl opacity-20 floating-animation" />
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-10 floating-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-neon-green/20 rounded-full blur-2xl opacity-30 floating-animation" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <p className="text-accent font-mono text-sm tracking-wider">Hi, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="gradient-text">Manoj V</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                Future-Ready <span className="text-neon-blue">AIML Engineer</span> & 
                <br />Creative <span className="text-neon-green">Web Designer</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              A passionate tech enthusiast building real-world applications that solve modern problems 
              using AI, ML, and cutting-edge web technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="neon" size="lg" onClick={() => scrollToSection('projects')}>
                View My Work
              </Button>
              <Button variant="hero" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="flex items-center gap-6 pt-4">
              <a href="tel:+919148652198" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                +91 9148652198
              </a>
              <a href="mailto:manojvadde94@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                manojvadde94@gmail.com
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent/30 shadow-card floating-animation">
                <img 
                  src="https://i.postimg.cc/4xY3Z6kq/Profile.jpg" 
                  alt="Manoj V - AIML Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-ai rounded-full blur-xl opacity-30 -z-10" />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
          <a href="https://github.com/Manoj2526-creator" target="_blank" rel="noopener noreferrer" 
             className="p-3 glass-card rounded-full hover:shadow-neon transition-all duration-300 hover:scale-110">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/manojvadde94" target="_blank" rel="noopener noreferrer"
             className="p-3 glass-card rounded-full hover:shadow-neon transition-all duration-300 hover:scale-110">
            <Linkedin className="h-5 w-5" />
          </a>
          <button onClick={() => scrollToSection('about')}
                  className="p-3 glass-card rounded-full hover:shadow-neon transition-all duration-300 hover:scale-110 animate-pulse-glow">
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;