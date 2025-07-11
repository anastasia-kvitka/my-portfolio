import { About } from "@/components/About";
import { Grant } from "@/components/Grant";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navigation } from "@/components/Navigation";
import { ScrollToTop } from "@/components/ScrollToTop";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Grant />
      <HowItWorks />
      <Features />
      <FAQ />
      <ScrollToTop />
    </>
  );
}
