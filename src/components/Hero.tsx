import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Github, Linkedin, Mail, Phone, Sparkles, Code2, Brain, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating particles data
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 10,
  }));

  const techIcons = [
    { Icon: Code2, position: { top: '20%', left: '10%' }, delay: 0 },
    { Icon: Brain, position: { top: '60%', right: '15%' }, delay: 1 },
    { Icon: Zap, position: { bottom: '30%', left: '20%' }, delay: 2 },
    { Icon: Sparkles, position: { top: '40%', right: '25%' }, delay: 0.5 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 ai-grid opacity-30" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-accent/40 rounded-full floating-animation"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Animated background elements with mouse parallax */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-ai rounded-full blur-3xl opacity-20 floating-animation"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div 
          className="absolute bottom-32 right-10 w-[500px] h-[500px] bg-gradient-glow rounded-full blur-3xl opacity-15 floating-animation" 
          style={{ 
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
          }} 
        />
        <div 
          className="absolute top-1/2 left-1/3 w-80 h-80 bg-neon-green/20 rounded-full blur-2xl opacity-25 floating-animation" 
          style={{ 
            animationDelay: '4s',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }} 
        />
      </div>

      {/* Floating Tech Icons */}
      {techIcons.map(({ Icon, position, delay }, index) => (
        <div
          key={index}
          className="absolute pointer-events-none opacity-10 floating-animation"
          style={{
            ...position,
            animationDelay: `${delay}s`,
          }}
        >
          <div className="w-16 h-16 bg-gradient-ai/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-accent/20">
            <Icon className="h-8 w-8 text-accent" />
          </div>
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Text Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-medium border border-neon-green/30 mb-4">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse-glow" />
              <span className="text-neon-green">Available for opportunities</span>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-accent font-mono text-sm tracking-wider uppercase opacity-80">
                  Hi, I'm
                </p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="gradient-text">Manoj V</span>
                </h1>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground leading-tight">
                  Future-Ready{' '}
                  <span className="relative inline-block">
                    <span className="text-neon-blue font-bold">AIML Engineer</span>
                    <div className="absolute -inset-1 bg-neon-blue/20 blur-xl rounded-lg -z-10" />
                  </span>
                  <br />
                  & Creative{' '}
                  <span className="relative inline-block">
                    <span className="text-neon-green font-bold">Web Designer</span>
                    <div className="absolute -inset-1 bg-neon-green/20 blur-xl rounded-lg -z-10" />
                  </span>
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                A passionate tech enthusiast building{' '}
                <span className="text-accent font-medium">real-world applications</span>{' '}
                that solve modern problems using{' '}
                <span className="text-neon-blue font-medium">AI, ML</span>, and{' '}
                <span className="text-neon-green font-medium">cutting-edge web technologies</span>.
              </p>

              {/* Stats */}
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">7.73</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Current CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-blue">10+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-green">5+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Projects</div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="neon" 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Sparkles className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-neon-blue to-neon-green opacity-0 group-hover:opacity-20 transition-opacity" />
              </Button>
              
              <Button 
                variant="hero" 
                size="lg"
                className="group"
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </Button>
            </div>

            {/* Enhanced Quick Contact */}
            <div className="glass-card p-4 rounded-2xl border border-border/20">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-6">
                  <a 
                    href="tel:+919148652198" 
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-blue transition-colors group"
                  >
                    <div className="p-2 bg-neon-blue/20 rounded-lg group-hover:bg-neon-blue/30 transition-colors">
                      <Phone className="h-4 w-4 text-neon-blue" />
                    </div>
                    <span className="font-mono">+91 9148652198</span>
                  </a>
                  
                  <a 
                    href="mailto:manojvadde94@gmail.com" 
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-green transition-colors group"
                  >
                    <div className="p-2 bg-neon-green/20 rounded-lg group-hover:bg-neon-green/30 transition-colors">
                      <Mail className="h-4 w-4 text-neon-green" />
                    </div>
                    <span className="font-mono">manojvadde94@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Profile Image Section */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              {/* Main Profile Container */}
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent/30 shadow-card floating-animation relative z-10">
                  <img 
                    src="https://i.postimg.cc/4xY3Z6kq/Profile.jpg" 
                    alt="Manoj V - AIML Engineer" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-ai/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Multiple Glow Layers */}
                <div className="absolute -inset-4 bg-gradient-ai rounded-full blur-xl opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="absolute -inset-8 bg-gradient-glow rounded-full blur-2xl opacity-20 -z-20 group-hover:opacity-40 transition-opacity duration-700" />
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-4 -right-4 glass-card p-3 rounded-xl border border-neon-blue/30 floating-animation">
                <Brain className="h-6 w-6 text-neon-blue" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl border border-neon-green/30 floating-animation" style={{ animationDelay: '1s' }}>
                <Code2 className="h-6 w-6 text-neon-green" />
              </div>
              
              <div className="absolute top-1/2 -right-8 glass-card p-2 rounded-lg border border-accent/30 floating-animation" style={{ animationDelay: '2s' }}>
                <Sparkles className="h-4 w-4 text-accent" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Social Links & Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Manoj2526-creator" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group p-3 glass-card rounded-full hover:shadow-neon transition-all duration-300 hover:scale-110 border border-border/20 hover:border-accent/30"
            >
              <Github className="h-5 w-5 group-hover:text-accent transition-colors" />
            </a>
            
            <a 
              href="https://linkedin.com/in/manojvadde94" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 glass-card rounded-full hover:shadow-neon transition-all duration-300 hover:scale-110 border border-border/20 hover:border-neon-blue/30"
            >
              <Linkedin className="h-5 w-5 group-hover:text-neon-blue transition-colors" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll to explore</span>
            <button 
              onClick={() => scrollToSection('about')}
              className="group p-4 glass-card rounded-full hover:shadow-neon transition-all duration-300 hover:scale-110 animate-pulse-glow border border-accent/30"
            >
              <ChevronDown className="h-5 w-5 text-accent group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;