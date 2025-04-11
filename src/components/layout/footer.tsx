import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Company information
const currentYear = new Date().getFullYear();
const companyName = "HealthCo";
const contactEmail = "hello@healthco.example.com";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-accent/40">
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute inset-0 opacity-5" 
             style={{ backgroundImage: 'url("/dots.svg")', backgroundSize: '30px' }}></div>
      </div>
      
      <div className="container-custom mx-auto py-16 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block relative group">
              <div className="flex items-center">
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Health</span>
                <span className="text-xl font-semibold text-foreground">Co</span>
              </div>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Premium health and wellness products designed to elevate your everyday well-being.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Products</h3>
            <div className="flex flex-col space-y-3">
              <Link href="/catalogue" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-2 opacity-0 transition-opacity group-hover:opacity-100"></span>
                All Products
              </Link>
              <Link href="/catalogue" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-2 opacity-0 transition-opacity group-hover:opacity-100"></span>
                Featured
              </Link>
              <Link href="/catalogue" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-2 opacity-0 transition-opacity group-hover:opacity-100"></span>
                New Arrivals
              </Link>
              <Link href="/catalogue" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-2 opacity-0 transition-opacity group-hover:opacity-100"></span>
                Bestsellers
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
            <div className="flex flex-col space-y-3">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-2 opacity-0 transition-opacity group-hover:opacity-100"></span>
            About Us
          </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-2 opacity-0 transition-opacity group-hover:opacity-100"></span>
            Contact
          </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-2 opacity-0 transition-opacity group-hover:opacity-100"></span>
                Our Story
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-2 opacity-0 transition-opacity group-hover:opacity-100"></span>
                Careers
              </Link>
            </div>
        </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for product updates, wellness tips, and exclusive offers.
            </p>
            <div className="flex" suppressHydrationWarning>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="rounded-l-full rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                suppressHydrationWarning
              />
              <Button className="rounded-l-none rounded-r-full bg-primary" suppressHydrationWarning>
                <Send size={16} />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail size={16} className="mr-2" />
                <a href={`mailto:${contactEmail}`} className="hover:text-primary transition-colors" suppressHydrationWarning>
                  {contactEmail}
                </a>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone size={16} className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin size={16} className="mr-2" />
                <span>123 Wellness St, Health City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-center text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; {currentYear} {companyName}. All rights reserved.
        </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 