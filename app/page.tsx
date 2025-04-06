import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navigation } from "@/components/Navigation";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <FAQ />
      <ScrollToTop />
    </>
  );
}
