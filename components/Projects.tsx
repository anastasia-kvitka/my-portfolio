/* eslint-disable @typescript-eslint/no-unused-vars */
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
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

interface Project {
  title: string;
  description: string;
  link: string;
  previewImage: string;
  previewVideo: string;
  technologies: string[];
}

const projectsData: Project[] = [
  {
    title: "Decoy Unit - 1000+ km",
    description:
      "An intelligent false target equipped with Luneburg lenses to mimic the radar signature of real military assets, effectively diverting enemy targeting systems and exhausting hostile resources.",
    link: "https://link.com",
    previewImage: "/images/IMG_3472.JPG",
    previewVideo: "/videos",
    technologies: ["Luneburg Lens"],
  },
  {
    title: "Interceptor Drone",
    description:
      "A high-speed UAV designed to detect and neutralize enemy drones. Its stealth mode reduces visibility to radar and thermal sensors, enabling covert interception in contested airspace.",
    link: "https://link.com",
    previewImage: "/images/IMG_3475.JPG",
    previewVideo: "/videos",
    technologies: ["AI", "stealth"],
  },
  {
    title: "Strike Drone / False Target - 200-300 km",
    description:
      "A precision-guided, autonomous aerial system capable of delivering focused tactical strikes with minimal operator involvement.",
    link: "https://link.com",
    previewImage: "/images/IMG_3478.JPG",
    previewVideo: "/videos",
    technologies: [],
  },
  {
    title: "Reconnaissance Drone",
    description:
      "An AI-powered drone with stealth mode providing real-time situational awareness and target identification.",
    link: "https://link.com",
    previewImage: "/images/logo.png",
    previewVideo: "/videos",
    technologies: ["AI", "stealth"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="container text-center m-auto py-24 sm:py-32 px-6 md:px-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          CAT{" "}
        </span>
        - Combat Autonomous Technology
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {projectsData?.map((item, index) => (
          <Card key={index} className="bg-muted/50">
            <CardHeader>
              {/* <video
                src={item.previewVideo}
                autoPlay
                muted
                className="w-full h-full"
              />*/}
              <AspectRatio ratio={3 / 2} className="mb-4">
                <Image
                  src={item.previewImage}
                  alt=""
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
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
            {/*<CardFooter className="flex gap-2 mt-2">*/}
            {/*<Button variant="default">
                <Link
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View
                </Link>
              </Button>*/}
            {/*<Button variant="outline">
                    <Link
                      href={item.code}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Code
                    </Link>
                  </Button>*/}
            {/*</CardFooter>*/}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
