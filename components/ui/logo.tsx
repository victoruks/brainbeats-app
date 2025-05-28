"use client";

import { useEffect, useRef } from "react";
import { Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export function Logo({ className, size = 40, animated = true }: LogoProps) {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated || !logoRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const logo = logoRef.current;
      if (!logo) return;

      const rect = logo.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Calculate rotation based on mouse position
      const rotateX = (y / (rect.height / 2)) * 10;
      const rotateY = (x / (rect.width / 2)) * -10;

      // Apply the rotation transform
      logo.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      if (logoRef.current) {
        // Reset to original position with a smooth transition
        logoRef.current.style.transition = "transform 0.5s ease";
        logoRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
      }
    };

    const handleMouseEnter = () => {
      if (logoRef.current) {
        logoRef.current.style.transition = "transform 0.1s ease";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    logoRef.current.addEventListener("mouseleave", handleMouseLeave);
    logoRef.current.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (logoRef.current) {
        logoRef.current.removeEventListener("mouseleave", handleMouseLeave);
        logoRef.current.removeEventListener("mouseenter", handleMouseEnter);
      }
    };
  }, [animated]);

  return (
    <div
      ref={logoRef}
      className={cn(
        "relative flex items-center justify-center transition-transform duration-300",
        className
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative flex items-center" style={{ transform: "translateZ(10px)" }}>
        <Headphones
          size={size}
          className="text-primary z-10"
          strokeWidth={2}
        />
        <div
          className="absolute inset-0 bg-primary opacity-20 rounded-full blur-md"
          style={{ transform: "translateZ(-5px) scale(1.2)" }}
        />
      </div>
      {animated && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-lg animate-pulse" />
      )}
    </div>
  );
}