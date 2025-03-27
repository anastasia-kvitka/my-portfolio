import { CustomDock } from "@/components/CustomDock";
import { DotBackground } from "@/components/DotBackground";
import { DownloadButton } from "@/components/DownloadButton";
import Education from "@/components/Education";
import Intro from "@/components/Intro";
import { Navigation } from "@/components/Navigation";
import Skills from "@/components/Skills";
import WorkExpirience from "@/components/WorkExpirience";

export default function ResumePage() {
  return (
    <div className="relative lg:w-8/12 md:w-9/12 sm:1/1 m-auto mt-0 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <DotBackground />
        <Navigation />
        <Intro />
        <DownloadButton />
        <Skills />
        <WorkExpirience />
        <Education />
        <CustomDock />
      </main>
    </div>
  );
}
