
import React from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
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

  const skillCategories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools & DevOps" },
    { id: "design", name: "Design" },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-3">My Skills</p>
          <h2 className="text-3xl md:text-heading-2 font-bold mb-6">
            Technologies & Tools I Use
          </h2>
          <p className="text-foreground/80 text-body-large">
            I've developed expertise in a range of technologies across the full stack,
            allowing me to build complete, scalable solutions from the ground up.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {skillCategories.map((category) => (
            <div key={category.id} className="glass p-8 rounded-xl reveal">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-2 h-10 bg-primary/90 rounded-full mr-3"></span>
                {category.name}
              </h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-foreground/70">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{
                            width: `${skill.level}%`,
                            transition: "width 1.5s ease-in-out",
                          }}
                        ></div>
                      </div>
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
                className="px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-sm font-medium hover-card"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
