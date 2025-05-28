"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Battery, 
  Ear, 
  Feather,
  ChevronRight
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const iconMap = {
  brain: Brain,
  battery: Battery,
  ear: Ear,
  feather: Feather
};

export function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cutting Edge Technology
          </h2>
          <p className="text-muted-foreground text-lg">
            Our headphones are engineered with the latest innovations to deliver unparalleled audio quality and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            {siteConfig.features.map((feature, index) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "flex items-start gap-4 p-6 rounded-lg cursor-pointer transition-all mb-4",
                    activeFeature === index 
                      ? "bg-card shadow-sm border" 
                      : "hover:bg-card/50"
                  )}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className={cn(
                    "p-3 rounded-full",
                    activeFeature === index 
                      ? "bg-primary/10 text-primary" 
                      : "bg-muted text-muted-foreground"
                  )}>
                    {Icon && <Icon size={24} />}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1 flex items-center">
                      {feature.title}
                      {activeFeature === index && (
                        <ChevronRight size={16} className="ml-2" />
                      )}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
            
            <Button className="mt-6">Explore All Features</Button>
          </div>
          
          <div className="bg-muted rounded-3xl p-8 relative h-[400px] flex items-center justify-center order-1 lg:order-2">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)]" />
            
            {siteConfig.features.map((feature, index) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: activeFeature === index ? 1 : 0,
                    scale: activeFeature === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="bg-background rounded-full p-6 mb-6 shadow-lg">
                    {Icon && <Icon size={48} className="text-primary" />}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground max-w-md">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}