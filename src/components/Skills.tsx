
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { 
  Code, Server, Database, Laptop, 
  PenTool, Command, Zap, ArrowRight 
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 85, category: "frontend" },
    { name: "TypeScript", level: 80, category: "frontend" },
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "Node.js", level: 85, category: "backend" },
    { name: "Express", level: 80, category: "backend" },
    { name: "MongoDB", level: 75, category: "backend" },
    { name: "SQL", level: 70, category: "backend" },
    { name: "Git", level: 85, category: "tools" },
    { name: "Docker", level: 65, category: "tools" },
    { name: "AWS", level: 60, category: "tools" },
    { name: "UI/UX Design", level: 75, category: "design" },
  ];

  const skillCategories: SkillCategory[] = [
    { 
      id: "frontend", 
      name: "Frontend", 
      icon: <Code className="h-5 w-5 text-primary" />,
      description: "Building responsive and interactive user interfaces with modern frameworks and libraries."
    },
    { 
      id: "backend", 
      name: "Backend", 
      icon: <Server className="h-5 w-5 text-primary" />,
      description: "Developing robust server-side applications and APIs to power web applications."
    },
    { 
      id: "tools", 
      name: "Tools & DevOps", 
      icon: <Command className="h-5 w-5 text-primary" />,
      description: "Utilizing industry tools for version control, deployment, and development workflows."
    },
    { 
      id: "design", 
      name: "Design", 
      icon: <PenTool className="h-5 w-5 text-primary" />,
      description: "Creating intuitive user experiences and visually appealing interfaces."
    },
  ];

  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="section-subtitle">My Skills</p>
          <h2 className="section-title">
            <span className="text-gradient">Technologies</span> & Tools I Use
          </h2>
          <p className="section-description">
            I've developed expertise in a range of technologies across the full stack,
            allowing me to build complete, scalable solutions from the ground up.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-secondary hover:bg-secondary/80 text-foreground/80"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <div 
              key={category.id}
              className={`transition-all duration-500 ${
                activeTab === category.id ? "block" : "hidden"
              }`}
            >
              <div className="glass p-8 rounded-xl mb-8 flex flex-col md:flex-row gap-6 items-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-foreground/70">{category.description}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 reveal">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex justify-between items-center text-sm mb-3">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-foreground/70">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-xl font-bold mb-10 text-center">Other Technologies I've Worked With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Redux", "Next.js", "Tailwind CSS", "SASS", "GraphQL", "Firebase",
              "Jest", "Webpack", "CI/CD", "Figma", "Responsive Design", "Python"
            ].map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-sm font-medium hover:-translate-y-1"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 reveal">
          <a href="#contact" className="inline-flex items-center gap-2 text-primary font-medium group">
            <Zap className="h-5 w-5" />
            Let's use these skills for your next project
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
