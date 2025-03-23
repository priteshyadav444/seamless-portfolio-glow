
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, ExternalLink } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Projects", url: "#projects" },
    { name: "Skills", url: "#skills" },
    { name: "Contact", url: "#contact" },
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: "https://github.com/priteshyadav444", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, url: "https://www.linkedin.com/in/priteshyadav444/", label: "LinkedIn" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "glass py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tight flex items-center gap-2">
          <span 
            className={cn(
              "text-primary transition-all duration-300",
              scrolled ? "text-2xl" : "text-3xl"
            )}
          >
            PY
          </span>
          <span className={scrolled ? "text-sm opacity-100" : "text-sm opacity-0"}>
            Pritesh Yadav
          </span>
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  className="text-foreground/80 hover:text-primary transition-all duration-300 text-sm font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background glass pt-20 px-4 z-40 flex flex-col justify-between transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center gap-6">
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  className="text-foreground hover:text-primary text-lg font-medium transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-6 mt-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </nav>
        <div className="text-center pb-10 text-sm text-foreground/50">
          <p>&copy; {new Date().getFullYear()} Pritesh Yadav</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
