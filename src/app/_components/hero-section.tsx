"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  className
}: HeroSectionProps) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <section
      className={cn(
        "relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center pt-24 pb-20 md:pt-28 md:pb-24 text-white bg-[url('https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center",
        className
      )}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-black/60 to-black/70"></div>

      <div className="container-custom mx-auto">
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-4">
          {/* Badge */}
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-4 py-1.5 backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="text-sm font-medium text-white">
              Premium Wellness Products
            </span>
          </div>
          
          {/* Title with enhanced animation and styling */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl relative">
            {isClient && (
              <div className="absolute -inset-x-32 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2 opacity-50"></div>
            )}
            
            {title.split(' ').map((word, i) => (
              <span key={i} className="inline-block relative transition-all duration-300 hover:text-primary hover:-translate-y-1">
                {word}{' '}
                {isClient && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary/80 to-transparent opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-500"></span>
                )}
              </span>
            ))}
          </h1>
          
          {/* Subtitle with improved styling */}
          {subtitle && (
            <p className="mt-4 text-lg sm:text-xl max-w-2xl leading-relaxed text-white/90">
              {subtitle}
            </p>
          )}
          
          {/* Call to action with enhanced styling */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center">
            <Button 
              asChild 
              size="lg" 
              className="px-8 rounded-full group hover:shadow-lg transition-all duration-300 relative overflow-hidden bg-primary"
            >
              <Link href={ctaLink} className="flex items-center gap-2">
                {isClient && (
                  <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                )}
                <span className="relative z-10">{ctaText}</span>
                <ArrowRight className="h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 rounded-full bg-white/10 hover:bg-white/20 border-white/20 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <Link href="/about" className="group">
                {isClient && (
                  <span className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                )}
                <span className="relative z-10">Learn More</span>
              </Link>
            </Button>
          </div>

          {/* Scroll indicator with enhanced styling */}
          {isClient && (
            <div className="mt-10 animate-bounce opacity-70 transition-opacity hover:opacity-100">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 