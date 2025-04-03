import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us - HealthCo",
  description: "Get in touch with HealthCo. We're here to help with all your wellness needs.",
};

const contactEmail = "info@healthco.example.com";
const contactPhone = "+1 (555) 123-4567"; // Placeholder
const contactAddress = "123 Wellness Lane, Healthville, HW 98765"; // Placeholder
const businessHours = "Monday - Friday: 9am - 5pm EST";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-10 md:py-12 bg-gradient-to-r from-secondary/30 to-background">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
        
        <div className="container-custom mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-3">
              <MessageSquare className="h-3 w-3 text-primary/70" />
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Contact Us</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              We&apos;d love to hear from you! Whether you have questions about our products, need assistance, or just want to share your wellness journey, feel free to reach out.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-8 md:py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/20 opacity-50"></div>
        
        <div className="container-custom mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Information */}
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">How to Reach Us</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Email Us</h3>
                    <p className="text-muted-foreground mb-1">For general inquiries and support:</p>
                    <a 
                      href={`mailto:${contactEmail}`} 
                      className="text-primary hover:underline transition-colors"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Call Us</h3>
                    <p className="text-muted-foreground mb-1">Our customer service team is ready to help:</p>
                    <p className="text-foreground font-medium">{contactPhone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Visit Us</h3>
                    <p className="text-muted-foreground mb-1">Our headquarters location:</p>
                    <p className="text-foreground">{contactAddress}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Business Hours</h3>
                    <p className="text-muted-foreground mb-1">When we&apos;re available:</p>
                    <p className="text-foreground">{businessHours}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="you@example.com" 
                      className="rounded-lg"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    className="rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Your Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can assist you..." 
                    className="rounded-lg min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full rounded-full group"
                >
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-primary/10 to-secondary/10 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 mix-blend-overlay opacity-30" 
             style={{ backgroundImage: 'url("/pattern.svg")', backgroundSize: '30px' }}></div>
        
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-3">Ready to Experience Premium Wellness?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-5">
            Explore our full range of premium wellness products and take the first step toward a healthier lifestyle.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="rounded-full px-8"
          >
            <Link href="/catalogue">
              Browse Products
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
} 