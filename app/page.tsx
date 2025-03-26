import ContactMe from "@/components/ContactMe";
import { CustomDock } from "@/components/CustomDock";
import Education from "@/components/Education";
import Intro from "@/components/Intro";
import { Meteors } from "@/components/magicui/meteors";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExpirience from "@/components/WorkExpirience";

export default function Home() {
  return (
    <div className="relative lg:w-8/12 md:w-9/12 sm:1/1 m-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Intro />
        <WorkExpirience />
        <Education />
        <Skills />
        <Projects />
        <ContactMe />
        <Meteors number={20} />
        <CustomDock />
      </main>
    </div>
  );
}
