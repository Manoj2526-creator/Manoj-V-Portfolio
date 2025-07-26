import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Manoj2526-creator',
      icon: Github,
    },
    {
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/manojvadde94',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:manojvadde94@gmail.com',
      icon: Mail,
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-card/30 border-t border-border/20 overflow-hidden">
      <div className="absolute inset-0 ai-grid opacity-10" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Manoj V</h3>
            <p className="text-muted-foreground max-w-sm">
              Future-Ready AIML Engineer & Creative Web Designer passionate about 
              building innovative solutions with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass-card rounded-lg hover:shadow-neon transition-all duration-300 hover:scale-110"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-3">
              <div>
                <p className="text-muted-foreground text-sm">Email</p>
                <a 
                  href="mailto:manojvadde94@gmail.com"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  manojvadde94@gmail.com
                </a>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Phone</p>
                <a 
                  href="tel:+919148652198"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  +91 9148652198
                </a>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Location</p>
                <p className="text-foreground">Bangalore, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Manoj V. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-primary fill-current" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-ai rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-neon-green/20 rounded-full blur-2xl opacity-20" />
    </footer>
  );
};

export default Footer;