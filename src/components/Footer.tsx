
import React from "react";
import { ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-primary text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Pritesh Yadav</h2>
            <p className="text-white/70 mt-2">Full-Stack Developer</p>
          </div>

          <div className="mt-8 md:mt-0">
            <button
              onClick={scrollToTop}
              className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>

        <hr className="border-white/10 my-10" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-white/70">
              <li>priteshyadav2015@gmail.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Mumbai, India</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              {[
                { name: "GitHub", url: "https://github.com/priteshyadav444" },
                { name: "LinkedIn", url: "https://linkedin.com/in/priteshyadav444" },
                { name: "Twitter", url: "#" }
              ].map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Let's Connect</h3>
            <p className="text-white/70 mb-4">
              Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
            </p>
            <a href="#contact" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-none">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10">
          <div className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Pritesh Yadav. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 text-sm text-white/70 flex items-center gap-2">
            Designed and built with <Heart className="h-4 w-4 text-red-400 animate-pulse-subtle" /> by Pritesh Yadav
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
