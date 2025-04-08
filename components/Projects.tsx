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
    title: "False Talget",
    description: "description",
    link: "https://link.com",
    code: "https://github.com",
    previewVideo: "/videos/Avid.mp4",
    technologies: ["Luneburg Lens"],
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
    <div className="relative lg:w-8/12 md:w-9/12 sm:1/1 m-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold z-10">Projects</h1>
          <div className="flex flex-wrap gap-4 z-10">
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
                  <Button variant="default">
                    <Link
                      href={item.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      View
                    </Link>
                  </Button>
                  {/*<Button variant="outline">
                    <Link
                      href={item.code}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Code
                    </Link>
                  </Button>*/}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
