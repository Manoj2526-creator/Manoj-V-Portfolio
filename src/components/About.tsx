import { Calendar, GraduationCap, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { downloadResumeAsPDF } from '@/utils/resumeDownload';
import { useToast } from '@/hooks/use-toast';

const About = () => {
  const { toast } = useToast();

  const handleDownloadResume = async () => {
    try {
      await downloadResumeAsPDF();
      toast({
        title: "Resume Downloaded",
        description: "Your resume has been downloaded as a PDF file.",
      });
    } catch (error) {
      toast({
        title: "Download Failed", 
        description: "Sorry, there was an error downloading the resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  const education = [
    {
      degree: "B.E. in Artificial Intelligence and Machine Learning",
      institution: "DSCE",
      period: "2023 - 2026",
      cgpa: "7.73",
      status: "Current"
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "SGP",
      period: "2021 - 2023", 
      cgpa: "9.27",
      status: "Completed"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 ai-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate tech enthusiast with a unique blend of mechanical engineering background 
            and cutting-edge AI/ML expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-accent">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm <span className="text-foreground font-medium">Manoj V</span>, a passionate tech enthusiast with a background in mechanical engineering 
                and a current focus on <span className="text-neon-blue font-medium">Artificial Intelligence and Machine Learning</span>. 
                I'm deeply interested in building real-world applications that solve modern problems using technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From cloud computing to machine learning, I enjoy blending design and functionality to craft 
                efficient digital solutions. My unique perspective combines <span className="text-neon-green font-medium">engineering precision</span> 
                with <span className="text-accent font-medium">creative innovation</span>.
              </p>
            </div>

            <div className="flex gap-4">
              <Button variant="neon" size="lg" onClick={handleDownloadResume}>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button variant="hero" size="lg">
                View Projects
              </Button>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-accent" />
              Education Timeline
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="glass-card p-6 rounded-xl hover:shadow-neon transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                        <p className="text-muted-foreground text-sm">{edu.institution}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Current' 
                          ? 'bg-neon-green/20 text-neon-green border border-neon-green/30' 
                          : 'bg-accent/20 text-accent border border-accent/30'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="text-accent font-medium">
                        CGPA: {edu.cgpa}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline connector */}
                  {index < education.length - 1 && (
                    <div className="absolute left-8 top-full w-px h-6 bg-gradient-to-b from-accent to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;