
import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

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
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 flex flex-col items-center text-center">
        <div className="reveal">
          <p className="text-primary inline-block px-3 py-1 font-medium rounded-full text-sm mb-6 bg-primary/10">
            Full-Stack Developer
          </p>
        </div>
        
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-heading-1 font-bold mb-6 reveal"
        >
          Hello, I'm{" "}
          <span className="text-primary inline-block relative">
            Pritesh Yadav
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
          </span>
        </h1>
        
        <p className="text-xl md:text-body-large text-foreground/80 max-w-3xl mx-auto mb-10 reveal">
          A passionate Full-Stack Developer building digital experiences with clean,
          efficient code. Specializing in modern web technologies and thoughtful UI/UX design.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 reveal">
          <a 
            href="#projects"
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            View My Work
          </a>
          <a 
            href="#contact"
            className="bg-secondary text-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
