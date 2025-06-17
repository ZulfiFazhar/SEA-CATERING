"use client";

import React from "react";
import { ArrowRight, MapPin, Truck, Star, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { deliveryFeatures, featureSections } from "@/config/features-data";

const deliverySteps = [
  {
    id: 1,
    icon: CheckCircle,
    title: "Order Confirmed",
    description: "Your meal plan is prepared by our chefs",
    time: "Instant",
    color: "text-green-500",
  },
  {
    id: 2,
    icon: Truck,
    title: "Quality Check",
    description: "Temperature controlled packaging",
    time: "2-4 hours",
    color: "text-blue-500",
  },
  {
    id: 3,
    icon: MapPin,
    title: "On The Way",
    description: "Real-time tracking available",
    time: "24-48 hours",
    color: "text-orange-500",
  },
  {
    id: 4,
    icon: Star,
    title: "Delivered",
    description: "Fresh meals at your doorstep",
    time: "On time",
    color: "text-purple-500",
  },
];

export function DeliveryFeature() {
  const deliveryFeature = featureSections[2];

  return (
    <div className="lg:col-span-8 group">
      <div
        className={cn(
          "relative h-full min-h-[500px] p-6 rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300",
          `bg-gradient-to-br ${deliveryFeature.gradient}`
        )}
      >
        {/* Icon & Header */}
        <div className="mb-6">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            {(() => {
              const IconComponent = deliveryFeature.icon;
              return (
                <IconComponent className="h-6 w-6 text-primary-foreground" />
              );
            })()}
          </div>
          <h3 className="text-xl font-bold mb-2">{deliveryFeature.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {deliveryFeature.description}
          </p>
        </div>

        {/* Delivery Process Timeline */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-3 text-foreground">
            Delivery Process
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {deliverySteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.id} className="relative">
                  <div className="bg-white/50 dark:bg-background/50 rounded-lg p-3 hover:bg-white/70 dark:hover:bg-background/70 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <IconComponent className={cn("h-3 w-3", step.color)} />
                      <span className="text-xs font-medium">{step.title}</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground mb-1 line-clamp-2">
                      {step.description}
                    </p>
                    <div className="text-[10px] font-medium text-primary">
                      {step.time}
                    </div>
                  </div>

                  {/* Timeline connector */}
                  {index < deliverySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-1 w-2 h-px bg-border transform -translate-y-1/2"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Delivery Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <div className="text-center p-3 bg-white/50 dark:bg-background/50 rounded-lg hover:bg-white/70 dark:hover:bg-background/70 transition-colors">
            <div className="text-lg font-bold text-primary">24-48h</div>
            <div className="text-xs text-muted-foreground">Average Time</div>
          </div>
          <div className="text-center p-3 bg-white/50 dark:bg-background/50 rounded-lg hover:bg-white/70 dark:hover:bg-background/70 transition-colors">
            <div className="text-lg font-bold text-primary">15+</div>
            <div className="text-xs text-muted-foreground">Cities</div>
          </div>
          <div className="text-center p-3 bg-white/50 dark:bg-background/50 rounded-lg hover:bg-white/70 dark:hover:bg-background/70 transition-colors">
            <div className="text-lg font-bold text-primary">99.5%</div>
            <div className="text-xs text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center p-3 bg-white/50 dark:bg-background/50 rounded-lg hover:bg-white/70 dark:hover:bg-background/70 transition-colors">
            <div className="text-lg font-bold text-primary">4.9★</div>
            <div className="text-xs text-muted-foreground">Rating</div>
          </div>
        </div>

        {/* Delivery Features */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {deliveryFeatures.map((feature) => {
            const FeatureIcon = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex items-center gap-2 text-sm p-2 bg-white/50 dark:bg-background/50 rounded-lg hover:bg-white/70 dark:hover:bg-background/70 transition-colors"
              >
                <FeatureIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-muted-foreground text-xs">
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href={deliveryFeature.href}
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
          >
            <span>{deliveryFeature.ctaText}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
