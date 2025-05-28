"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === siteConfig.testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? siteConfig.testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="reviews" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from music enthusiasts and audio professionals who have experienced Brain Beats.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden py-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {siteConfig.testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-lg bg-card">
                    <CardContent className="pt-12 pb-8 px-8 relative">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary/90 p-4 rounded-full">
                        <Quote size={24} className="text-white" />
                      </div>
                      
                      <p className="text-lg italic mb-8 text-center">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center justify-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.avatarUrl}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {siteConfig.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  index === currentIndex ? "bg-primary" : "bg-primary/20"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-background/80 hover:bg-background shadow-md"
            onClick={prevTestimonial}
          >
            <ChevronLeft size={24} />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-background/80 hover:bg-background shadow-md"
            onClick={nextTestimonial}
          >
            <ChevronRight size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
}