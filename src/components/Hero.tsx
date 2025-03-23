
import React from "react";
import { ArrowDown, Code, Github, LinkedinIcon } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden py-10"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="reveal opacity-0 transform translate-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 glass-card">
            <Code className="h-4 w-4 text-primary" />
            Full-Stack Developer
          </div>
        </div>
        
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 reveal opacity-0 transform translate-y-5"
        >
          Hello, I'm {" "}
          <span className="text-gradient-alt">
            Pritesh Yadav
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto mb-12 reveal opacity-0 transform translate-y-5 leading-relaxed">
          I build clean, efficient software solutions with modern technologies.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 reveal opacity-0 transform translate-y-5">
          <a 
            href="#projects"
            className="btn-primary"
          >
            View Projects
          </a>
          <a 
            href="https://github.com/priteshyadav444"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium 
                     bg-secondary dark:bg-secondary/60 text-foreground dark:text-foreground
                     hover:bg-secondary/80 dark:hover:bg-secondary/80 transition-colors duration-300"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/priteshyadav444"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium 
                     bg-[#0A66C2]/10 text-[#0A66C2] dark:bg-[#0A66C2]/20 dark:text-[#0A66C2]/90
                     hover:bg-[#0A66C2]/20 dark:hover:bg-[#0A66C2]/30 transition-colors duration-300"
          >
            <LinkedinIcon className="h-5 w-5" />
            LinkedIn
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          aria-label="Scroll down" 
          className="p-2 rounded-full hover:bg-secondary/50 dark:hover:bg-secondary/30 transition-colors duration-300"
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </a>
      </div>

      {/* Initialize animation on component mount */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                  }
                });
              },
              { threshold: 0.1 }
            );

            document.querySelectorAll('.reveal').forEach((el) => {
              observer.observe(el);
            });
          });
        `
      }} />
    </section>
  );
};

export default Hero;
