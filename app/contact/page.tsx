import { Navbar } from "@/components/navbar";
import { TestimonialForm } from "@/components/testimonials/testimonial-form";
import { TestimonialCarousel } from "@/components/testimonials/testimonial-carousel";
import {
  Card,
  CardContent,
  //   CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team or share your experience with SEA
            Catering
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Manager: Brian</p>
              <a
                href="tel:08123456789"
                className="text-primary hover:underline font-medium"
              >
                08123456789
              </a>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:info@seacatering.co.id"
                className="text-primary hover:underline"
              >
                info@seacatering.co.id
              </a>
              <p className="text-muted-foreground mt-1">General inquiries</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                All major cities across Indonesia
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Mon - Fri: 8AM - 8PM
                <br />
                Sat - Sun: 9AM - 6PM
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from our satisfied customers across Indonesia
            </p>
          </div>

          <TestimonialCarousel />
        </div>

        {/* Testimonial Form Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
            <p className="text-muted-foreground mb-6">
              We&apos;d love to hear about your journey with SEA Catering. Your
              feedback helps us improve our service and helps other customers
              make informed decisions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">Rate Your Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    Give us a star rating from 1 to 5
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">Tell Your Story</h3>
                  <p className="text-sm text-muted-foreground">
                    Share what you loved about our meals and service
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold">Help Others</h3>
                  <p className="text-sm text-muted-foreground">
                    Your review will be featured to help other customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <TestimonialForm />
        </div>
      </div>
    </div>
  );
}
