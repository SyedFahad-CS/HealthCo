import { HeroSection } from "./_components/hero-section";
import { ProductCard } from "@/components/products/product-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, RefreshCw, Star } from "lucide-react";

// Placeholder data for featured products
const featuredProducts = [
  {
    slug: "placeholder-product-1",
    name: "Revitalizing Serum",
    shortDescription: "Boost your skin&apos;s natural glow with our potent antioxidant serum.",
    imageUrl: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2000&auto=format&fit=crop",
    imageAlt: "Bottle of Revitalizing Serum",
    isNew: true,
    category: "Skincare"
  },
  {
    slug: "placeholder-product-2",
    name: "Calming Herbal Tea",
    shortDescription: "Unwind and relax with our signature blend of calming herbs.",
    imageUrl: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Box of Calming Herbal Tea",
    category: "Wellness"
  },
  {
    slug: "placeholder-product-3",
    name: "Energy Boost Capsules",
    shortDescription: "Natural ingredients to support sustained energy throughout your day.",
    imageUrl: "https://images.unsplash.com/photo-1626202373152-8db1760c8f61?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Bottle of Energy Boost Capsules",
    category: "Supplements"
  },
];

// Benefits section content
const benefits = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Natural Ingredients",
    description: "All our products are made with carefully selected, natural ingredients that are gentle on your body.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Science-Backed",
    description: "Our formulations are developed by experts and supported by scientific research.",
  },
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: "Sustainable Packaging",
    description: "We&apos;re committed to reducing our environmental impact with eco-friendly packaging.",
  },
];

// Testimonials data
const testimonials = [
  {
    quote: "These products have completely transformed my wellness routine. I&apos;ve never felt better!",
    author: "Jessica K.",
    role: "Fitness Instructor"
  },
  {
    quote: "The quality and effectiveness of HealthCo products are unmatched. I recommend them to all my clients.",
    author: "Dr. Michael Chen",
    role: "Wellness Practitioner"
  },
  {
    quote: "Finally found products that are both sustainable and actually work. Very impressed!",
    author: "Sam T.",
    role: "Environmental Advocate"
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection
        title="Elevate Your Well-being"
        subtitle="Discover premium products designed for a healthier, happier you."
        ctaText="Explore Catalogue"
        ctaLink="/catalogue"
      />

      {/* Featured Products Section */}
      <section className="py-10 md:py-12 bg-gradient-to-b from-background to-accent/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
        
        <div className="container-custom mx-auto relative z-10">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-3">
              <Star className="h-3 w-3 text-primary/70" />
              <span className="text-sm font-medium text-primary">Featured Selection</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Our Best Sellers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our most popular wellness products, carefully crafted to support your health journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.slug}
                slug={product.slug}
                name={product.name}
                shortDescription={product.shortDescription}
                imageUrl={product.imageUrl}
                imageAlt={product.imageAlt}
                isNew={product.isNew}
                category={product.category}
              />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full group px-8 border-primary/10 hover:border-primary/20 hover:bg-primary/5">
              <Link href="/catalogue" className="inline-flex items-center gap-2">
                View All Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-accent/80 to-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'url("/grid.svg")', backgroundSize: '30px' }}></div>
        <div className="absolute top-1/3 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
        
        <div className="container-custom mx-auto relative z-10">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-2">
              <Shield className="h-3 w-3 text-primary/70" />
              <span className="text-sm font-medium text-primary">Why HealthCo</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">The HealthCo Difference</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We&apos;re dedicated to providing high-quality wellness products that improve your daily life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-xl shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/20"
              >
                <div className="mb-3 text-primary bg-primary/10 p-3 inline-block rounded-lg">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-10 md:py-12 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        
        <div className="container-custom mx-auto relative z-10">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-2">
              <Star className="h-3 w-3 text-primary/70" />
              <span className="text-sm font-medium text-primary">Customer Stories</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Don&apos;t just take our word for it — hear from people who have transformed their wellness journey with HealthCo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-xl shadow-sm border border-border relative transition-all duration-300 hover:shadow-md hover:border-primary/20"
              >
                <div className="absolute -top-4 left-8 text-primary/50 text-5xl">&ldquo;</div>
                <p className="text-foreground mb-4 italic relative z-10">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-secondary/10 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 mix-blend-overlay opacity-30" 
             style={{ backgroundImage: 'url("/pattern.svg")', backgroundSize: '30px' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_10%,rgba(var(--primary-rgb),0.03)_0,transparent_100%)]"></div>
        
        <div className="container-custom mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">Ready to Transform Your Wellness Routine?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            Explore our full range of premium health and wellness products and take the first step toward a healthier lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 group">
              <Link href="/catalogue" className="inline-flex items-center gap-2">
                Shop Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary/10 hover:border-primary/20 hover:bg-primary/5">
              <Link href="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
