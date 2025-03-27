import ContactMe from "@/components/ContactMe";
import { CustomDock } from "@/components/CustomDock";
import { DotBackground } from "@/components/DotBackground";
import { Navigation } from "@/components/Navigation";
import React from "react";

export default function ContactMePage() {
  return (
    <div className="relative lg:w-8/12 md:w-9/12 sm:1/1 m-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <DotBackground />
        <Navigation />
        <ContactMe />
        <CustomDock />
      </main>
    </div>
  );
}
