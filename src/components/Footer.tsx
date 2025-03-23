
import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Pritesh Yadav</h2>
            <p className="text-white/70 mt-2">Full-Stack Developer</p>
          </div>

          <div className="mt-8 md:mt-0">
            <button
              onClick={scrollToTop}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Pritesh Yadav. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 text-sm text-white/70">
            Designed and built with passion
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
