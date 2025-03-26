import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  link: string;
  code: string;
  previewVideo: string;
  technologies: string[];
}

const projectsData: Project[] = [
  {
    title: "Avid MediCentral | CloudUX",
    description: "description",
    link: "https://link.com",
    code: "https://github.com",
    previewVideo: "/videos/Avid.mp4",
    technologies: ["Figma", "Sketch", "InVision"],
  },
  {
    title: "Avid MediCentral | CloudUX",
    description: "description",
    link: "https://link.com",
    code: "https://github.com",
    previewVideo: "/videos/Avid.mp4",
    technologies: ["Figma", "Sketch", "InVision"],
  },
  {
    title: "Avid MediCentral | CloudUX",
    description: "description",
    link: "https://link.com",
    code: "https://github.com",
    previewVideo: "/videos/Avid.mp4",
    technologies: ["Figma", "Sketch", "InVision"],
  },
  {
    title: "Avid MediCentral | CloudUX",
    description: "description",
    link: "https://link.com",
    code: "https://github.com",
    previewVideo: "/videos/Avid.mp4",
    technologies: ["Figma", "Sketch", "InVision"],
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="flex flex-wrap gap-4">
        {projectsData?.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              {/* <video
                src={item.previewVideo}
                autoPlay
                muted
                className="w-full h-full"
              />*/}
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {item.technologies.map((tech, index) => (
                <Badge variant="secondary" key={index}>
                  {tech}
                </Badge>
              ))}
            </CardContent>
            <CardFooter className="flex gap-2 mt-2">
              <Link href={item.link} rel="noopener noreferrer" target="_blank">
                <Button variant="default">View</Button>
              </Link>
              <Link href={item.code} rel="noopener noreferrer" target="_blank">
                <Button variant="outline">Code</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
