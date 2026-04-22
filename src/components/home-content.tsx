import { About } from "@/components/sections/about";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";

export function HomeContent() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <About />
    </main>
  );
}
