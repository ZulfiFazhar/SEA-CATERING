import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Features />
      <Services />
    </main>
  );
}
