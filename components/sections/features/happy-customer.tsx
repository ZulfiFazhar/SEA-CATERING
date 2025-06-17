import { Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { testimonials, featureSections } from "@/config/features-data";

export function HappyCustomersFeature() {
  const happyCustomersFeature = featureSections[1];

  return (
    <div className="lg:col-span-8 group">
      <div
        className={cn(
          "relative h-full min-h-[500px] p-6 rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300",
          `bg-gradient-to-br ${happyCustomersFeature.gradient}`
        )}
      >
        {/* Icon & Header */}
        <div className="mb-6">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            {(() => {
              const IconComponent = happyCustomersFeature.icon;
              return (
                <IconComponent className="h-6 w-6 text-primary-foreground" />
              );
            })()}
          </div>
          <h3 className="text-xl font-bold mb-2">
            {happyCustomersFeature.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {happyCustomersFeature.description}
          </p>
        </div>

        {/* Testimonials Marquee */}
        <div className="relative h-[300px] mb-6">
          <Marquee pauseOnHover className="absolute top-0 [--duration:25s]">
            {testimonials.map((testimonial, idx) => (
              <figure
                key={`top-${testimonial.name}-${idx}`}
                className={cn(
                  "relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4 mx-2",
                  "bg-white/80 dark:bg-background/80 backdrop-blur-sm",
                  "hover:bg-white/90 dark:hover:bg-background/90",
                  "transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                )}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="ring-2 ring-primary/20">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold truncate">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {testimonial.role}
                    </div>
                    <div className="flex mt-1">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 fill-yellow-400 text-yellow-400"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <blockquote className="text-sm text-muted-foreground leading-relaxed">
                  &quot;{testimonial.message}&quot;
                </blockquote>
              </figure>
            ))}
          </Marquee>

          <Marquee
            reverse
            pauseOnHover
            className="absolute top-32 [--duration:20s]"
          >
            {testimonials.slice(3).map((testimonial, idx) => (
              <figure
                key={`middle-${testimonial.name}-${idx}`}
                className={cn(
                  "relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4 mx-2",
                  "bg-white/80 dark:bg-background/80 backdrop-blur-sm",
                  "hover:bg-white/90 dark:hover:bg-background/90",
                  "transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                )}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="ring-2 ring-primary/20">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold truncate">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {testimonial.role}
                    </div>
                    <div className="flex mt-1">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 fill-yellow-400 text-yellow-400"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <blockquote className="text-sm text-muted-foreground leading-relaxed">
                  &quot;{testimonial.message}&quot;
                </blockquote>
              </figure>
            ))}
          </Marquee>
        </div>

        {/* CTA */}
        <Link
          href={happyCustomersFeature.href}
          className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
        >
          <span className="font-medium">{happyCustomersFeature.ctaText}</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
