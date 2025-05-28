"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const headphoneRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!headphoneRef.current) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headphone = headphoneRef.current;
      if (!headphone) return;
      
      // Parallax effect - make the headphone move slower than the scroll
      headphone.style.transform = `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.05}deg)`;
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90 z-0" />
      
      {/* Animated circles in background */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 z-10">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Elevate Your Audio <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                Experience
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg"
          >
            Immerse yourself in sound like never before with our premium headphones designed for audiophiles and everyday listeners alike.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="group">
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </motion.div>
        </div>
        
        <div className="flex items-center justify-center relative order-1 lg:order-2">
          <div
            ref={headphoneRef}
            className="relative"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.3
              }}
              className="relative z-10"
            >
              <Logo size={400} className="transform -rotate-12" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}