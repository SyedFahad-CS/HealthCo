import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-10 md:py-12 bg-gradient-to-r from-accent to-background">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
        
        <div className="container-custom mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-3">
              <span className="text-sm font-medium text-primary">About HealthCo</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Our Mission</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              At HealthCo, we&apos;re dedicated to providing premium wellness products that help you live a healthier, more balanced life. Our commitment to quality, sustainability, and innovation drives everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-8 md:py-10">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="md:pr-6">
              <h2 className="text-3xl font-bold text-foreground mb-3">Our Story</h2>
              <p className="text-muted-foreground mb-3">
                Founded in 2020, HealthCo began with a simple mission: to create natural wellness products that actually work. Our founder, Dr. Sarah Chen, was frustrated with the market&apos;s abundance of products filled with unnecessary chemicals and unproven ingredients.
              </p>
              <p className="text-muted-foreground mb-4">
                After years of research and development, we launched our first line of all-natural supplements, which quickly gained popularity for their effectiveness and quality. Today, we continue to expand our product range while maintaining our core values of transparency, sustainability, and evidence-based formulation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="rounded-full" size="lg">
                  <Link href="/catalogue" className="inline-flex items-center gap-2">
                    Browse Products
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-xl overflow-hidden shadow-md mt-4 md:mt-0">
              <Image 
                src="https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=2070&auto=format&fit=crop"
                alt="Our facility and team"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      

      {/* Call to Action */}
      
    </main>
  );
} 