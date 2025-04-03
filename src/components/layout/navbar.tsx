"use client"; // Required for useState and onClick

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, Sparkles, Heart, BookOpen } from "lucide-react"; // Import icons
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Navigation links
const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/catalogue" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "relative w-full z-50 border-b transition-all duration-300 bg-background",
        scrolled 
          ? "shadow-sm border-primary/5" 
          : "border-transparent"
      )}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/30" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute -left-1/4 top-1/2 h-8 w-[500px] -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_10%,rgba(var(--primary-rgb),0.03)_0,transparent_100%)]" />
      </div>

      <div className="container-custom relative z-10">
        <nav className="flex h-16 items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2 relative">
            <span className="absolute -inset-x-2 -inset-y-2 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center z-10">
              <div className="relative h-8 w-8 overflow-hidden rounded-xl bg-primary/10 p-1.5 transition-all duration-300 group-hover:shadow-sm group-hover:bg-primary/15">
                <span className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
                <span className="relative block text-base font-bold text-primary transition-transform duration-300 group-hover:scale-110">H</span>
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/20" />
              </div>
              <div className="ml-2">
                <p className="text-sm font-bold tracking-tight text-foreground">
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">H</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" style={{ transitionDelay: "30ms" }}>e</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" style={{ transitionDelay: "60ms" }}>a</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" style={{ transitionDelay: "90ms" }}>l</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" style={{ transitionDelay: "120ms" }}>t</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" style={{ transitionDelay: "150ms" }}>h</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" style={{ transitionDelay: "180ms" }}>C</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" style={{ transitionDelay: "210ms" }}>o</span>
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-muted-foreground/90">Premium Wellness</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center gap-1 rounded-full bg-accent/40 p-1 backdrop-blur-sm ring-1 ring-primary/5 shadow-sm">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300",
                      isActive 
                        ? "text-primary font-semibold shadow-sm" 
                        : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <>
                        <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />
                        <span className="absolute -inset-1 rounded-full bg-primary/5 -z-10 opacity-0 animate-pulse"></span>
                      </>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              asChild 
              variant="ghost" 
              size="sm" 
              className="text-foreground/80 hover:text-foreground group relative"
            >
              <Link href="/blog" className="overflow-hidden flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5 text-primary/70" />
                <span className="font-medium">Blog</span>
                <span className="absolute -inset-x-2 bottom-0 h-px bg-gradient-to-r from-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="sm" 
              className="group relative overflow-hidden rounded-full bg-primary/10 px-4 hover:bg-primary/20 hover:shadow-sm transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center gap-1">
                <Sparkles className="h-3.5 w-3.5 text-primary transition-transform duration-300 group-hover:rotate-12" />
                <span className="relative text-primary font-medium">
                  Contact
                  <span className="absolute inset-x-0 bottom-0 h-px bg-primary/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
                <ChevronRight className="h-3 w-3 text-primary transition-transform duration-300 group-hover:translate-x-0.5" />
                <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-primary/20" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/5 text-primary/70 transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:shadow-sm"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-all duration-300",
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-background/90 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_0%,rgba(var(--primary-rgb),0.05)_0,transparent_100%)]" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col">
          <div className="flex h-14 items-center justify-between px-4 border-b border-primary/5">
            <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="relative h-8 w-8 overflow-hidden rounded-xl bg-primary/10 p-1.5 transition-all duration-300 group-hover:bg-primary/15">
                <span className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
                <span className="relative block text-base font-bold text-primary transition-transform duration-300 group-hover:scale-110">H</span>
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/20" />
              </div>
              <div className="ml-2">
                <p className="text-sm font-bold leading-none tracking-tight">HealthCo</p>
                <p className="mt-0.5 text-[11px] font-medium text-muted-foreground/90">Premium Wellness</p>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="h-8 w-8 inline-flex items-center justify-center rounded-lg bg-primary/5 text-primary/70 transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:shadow-sm"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "group relative px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-300",
                      isActive 
                        ? "bg-primary/10 text-primary font-semibold" 
                        : "text-foreground/80 hover:bg-primary/5 hover:text-foreground"
                    )}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <span className="absolute inset-y-0 left-0 w-1 rounded-full bg-primary" />
                    )}
                    <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/10 transition-opacity group-hover:opacity-100 opacity-0" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="p-4 border-t border-primary/5">
            <div className="grid grid-cols-2 gap-3">
              <Button 
                asChild 
                variant="outline" 
                className="relative w-full border-primary/10 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 hover:shadow-sm"
              >
                <Link 
                  href="/blog" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1"
                >
                  <BookOpen className="h-3.5 w-3.5 text-primary/70" />
                  <span className="font-medium">Blog</span>
                </Link>
              </Button>
              <Button 
                asChild 
                className="group relative w-full overflow-hidden rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:shadow-sm"
              >
                <Link 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1"
                >
                  <Sparkles className="h-3.5 w-3.5 text-primary transition-transform duration-300 group-hover:rotate-12" />
                  <span className="text-primary font-medium">Contact</span>
                  <ChevronRight className="h-3 w-3 text-primary transition-transform duration-300 group-hover:translate-x-0.5" />
                  <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-primary/20" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-6 flex items-center justify-center">
              <div className="text-xs text-muted-foreground/80 flex items-center gap-1.5 font-medium">
                <Heart className="h-3 w-3 text-primary/60" /> 
                <span>Made with care for your wellness</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 