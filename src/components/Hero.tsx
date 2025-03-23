
import React, { useEffect, useRef } from "react";
import { ArrowDown, Code, Briefcase, ExternalLink } from "lucide-react";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pb-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/3 right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 flex flex-col items-center text-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-primary/10 text-primary">
            <Code className="h-4 w-4" />
            Full-Stack Developer
          </div>
        </div>
        
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 reveal"
        >
          Hello, I'm{" "}
          <span className="text-gradient inline-block">
            Pritesh Yadav
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10 reveal font-light">
          I build exceptional digital experiences with modern technologies and thoughtful design.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 reveal">
          <a 
            href="#projects"
            className="btn-primary"
          >
            View My Work
            <Briefcase className="h-5 w-5" />
          </a>
          <a 
            href="#contact"
            className="btn-secondary"
          >
            Let's Connect
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down" className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300">
          <ArrowDown className="h-6 w-6 text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
