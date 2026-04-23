import { About } from "@/components/sections/about";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-[100vw] flex-col overflow-x-hidden">
      <Hero />
      <Features />
      <HowItWorks />
      <About />
    </main>
  );
}
