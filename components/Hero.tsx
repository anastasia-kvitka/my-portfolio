"use client";
import Link from "next/link";
//import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 m-auto place-items-center min-h-screen py-20 md:py-48 px-6 md:px-12 gap-10 w-full">
      <div className="text-center lg:text-start space-y-6 w-full">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#FF5300]  to-[#D84600] text-transparent bg-clip-text">
              CAT
            </span>{" "}
            – The
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#1D59A7] to-[#2B4970] text-transparent bg-clip-text">
              Future
            </span>{" "}
            of Autonomous Warfare
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          A cutting-edge integrated solution combining false targets, scout
          drones, and strike drones to dominate the modern battlefield.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3" asChild>
            <Link href="/projects">Discover CAT in Action</Link>
          </Button>
          <Button className="w-full md:w-1/3" variant="outline">
            <Link href="/contact-us">Talk to Our Experts</Link>
          </Button>
        </div>
      </div>

      <div className="w-full">
        <DotLottieReact
          src="https://lottie.host/9d183276-bb9a-458c-9e92-e8d2ee083eef/9BomzK5pLS.lottie"
          loop
          autoplay
        />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
