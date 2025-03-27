import React from "react";
import { Badge } from "@/components/ui/badge";

const skillsData = [
  "Figma",
  "Sketch",
  "InVision",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Git",
  "GitHub",
  "GitLab CI/CD",
  "Groovy",
  "Selenium WebDriver",
  "Serenity",
  "TestNG",
  "JUnit",
  "Kubernetes",
  "Docker",
];

const Skills = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold z-10">Skills</h1>
      <div className="flex flex-wrap gap-2 z-10">
        {skillsData.map((skill, index) => (
          <Badge key={index}>{skill}</Badge>
        ))}
      </div>
    </div>
  );
};

export default Skills;
