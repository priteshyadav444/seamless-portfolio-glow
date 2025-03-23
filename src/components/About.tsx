
import React from "react";
import { User, FileText, Award, Briefcase, Code, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Technologies", value: "15+" },
  ];

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Company Name",
      period: "2021 - Present",
      description: "Leading development of web applications using React, Node.js and MongoDB.",
    },
    {
      role: "Frontend Developer",
      company: "Company Name",
      period: "2019 - 2021",
      description: "Built responsive user interfaces using React and modern CSS techniques.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-secondary/30 to-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="section-subtitle">About Me</p>
          <h2 className="section-title">
            I create <span className="text-gradient">elegant solutions</span> to complex problems
          </h2>
          <p className="section-description">
            I'm a full-stack developer with a passion for building exceptional digital experiences.
            With expertise in both frontend and backend technologies, I craft efficient, scalable,
            and user-friendly applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 reveal">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <User className="text-primary h-5 w-5" />
                </div>
                <h3 className="text-xl font-medium">My Background</h3>
              </div>
              <p className="text-foreground/80 pl-10">
                With over 4 years of experience in web development, I've worked on a diverse range of projects 
                from e-commerce platforms to complex enterprise applications. I'm passionate about clean code, 
                performance optimization, and creating intuitive user experiences.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <FileText className="text-primary h-5 w-5" />
                </div>
                <h3 className="text-xl font-medium">Education</h3>
              </div>
              <p className="text-foreground/80 pl-10">
                I hold a Bachelor's degree in Computer Science and have continuously expanded my knowledge 
                through professional certifications and self-directed learning to stay current with the 
                latest technologies and best practices.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="text-primary h-5 w-5" />
                </div>
                <h3 className="text-xl font-medium">My Approach</h3>
              </div>
              <p className="text-foreground/80 pl-10">
                I believe in writing clean, maintainable code and creating intuitive user experiences. 
                My problem-solving approach focuses on understanding core requirements and delivering 
                efficient, scalable solutions that exceed expectations.
              </p>
            </div>
          </div>

          <div className="space-y-10 reveal">
            <div className="grid grid-cols-3 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="glass p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <h4 className="text-3xl font-bold text-gradient mb-2">{stat.value}</h4>
                  <p className="text-sm text-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Briefcase className="text-primary h-5 w-5" />
                </div>
                <h3 className="text-xl font-medium">Work Experience</h3>
              </div>

              <div className="space-y-8 pl-10">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l border-primary/20 hover:border-primary transition-colors duration-300">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
                    <h4 className="text-lg font-medium">{exp.role}</h4>
                    <div className="flex justify-between text-sm text-foreground/70 mb-2">
                      <span>{exp.company}</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-foreground/80">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary">
            <Heart className="h-4 w-4" />
            <span>What I love to work with</span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              "React", "Node.js", "TypeScript", "JavaScript", "MongoDB", "Express",
              "Next.js", "Tailwind CSS", "GraphQL", "Firebase", "AWS", "Git"
            ].map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-secondary rounded-xl text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-300"
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

export default About;
