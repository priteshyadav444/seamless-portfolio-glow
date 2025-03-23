
import React, { useState } from "react";
import { ExternalLink, Github, ArrowRight, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3089&q=80",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
      category: "web",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for teams to manage projects, tasks and deadlines efficiently.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2939&q=80",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
      category: "web",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern personal portfolio showcasing projects and skills with smooth animations.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2955&q=80",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
      category: "design",
    },
    {
      id: 4,
      title: "Weather Application",
      description: "Real-time weather forecasting application with location-based services.",
      technologies: ["JavaScript", "API Integration", "CSS"],
      imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
      category: "mobile",
    },
  ];

  const categories = ["all", "web", "mobile", "design"];
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-background dark:bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="section-subtitle">My Projects</p>
          <h2 className="section-title">
            Recent <span className="text-gradient">work</span>
          </h2>
          <p className="section-description">
            Explore my recent projects showcasing clean code, 
            thoughtful architecture, and attention to performance.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center p-1 bg-secondary/20 dark:bg-secondary/10 backdrop-blur-sm rounded-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "hover:bg-secondary/60 dark:hover:bg-secondary/20 text-foreground/80"
                )}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-xl bg-white dark:bg-black/20 border border-border dark:border-white/5 shadow-sm hover:shadow-md dark:shadow-none transition-all duration-500 reveal"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors duration-300"
                        aria-label="View on GitHub"
                      >
                        <Github className="h-5 w-5 text-white" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors duration-300"
                        aria-label="View live site"
                      >
                        <Eye className="h-5 w-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-foreground/70 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-3 py-1 bg-secondary/30 dark:bg-secondary/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <a
                    href={project.liveUrl || project.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary flex items-center gap-2 font-medium text-sm group"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary/50 dark:bg-secondary/10 hover:bg-secondary/70 dark:hover:bg-secondary/20 text-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300"
          >
            More on GitHub
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
