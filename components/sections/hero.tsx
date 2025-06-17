import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 bg-[url('/food.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-4xl mx-auto text-center px-5">
        <Badge variant="secondary" className="mb-4">
          🇮🇩 Serving All Across Indonesia
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          SEA Catering
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 font-medium">
          &quot;Healthy Meals, Anytime, Anywhere&quot;
        </p>
        <p className="text-lg text-white mb-10 max-w-2xl mx-auto">
          Discover our customizable healthy meal service with delivery all
          across Indonesia. Nutritious, delicious, and tailored to your
          lifestyle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/login">Order Now</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
