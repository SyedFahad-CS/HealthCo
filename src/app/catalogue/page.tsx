import { ProductCard } from "@/components/products/product-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Filter } from "lucide-react";

// Placeholder data for catalogue products (expand or fetch later)
const catalogueProducts = [
  {
    slug: "placeholder-product-1",
    name: "Revitalizing Serum",
    shortDescription: "Boost your skin's natural glow with our potent antioxidant serum.",
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
  {
    slug: "placeholder-product-4",
    name: "Soothing Lavender Balm",
    shortDescription: "Perfect for massage or relaxing before sleep.",
    imageUrl: "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?q=80&w=1974&auto=format&fit=crop",
    imageAlt: "Jar of Soothing Lavender Balm",
    category: "Aromatherapy"
  },
  {
    slug: "placeholder-product-5",
    name: "Organic Greens Powder",
    shortDescription: "A quick and easy way to get your daily dose of greens.",
    imageUrl: "https://images.unsplash.com/photo-1610725664285-5b93e7e23e95?q=80&w=1974&auto=format&fit=crop",
    imageAlt: "Container of Organic Greens Powder",
    category: "Nutrition"
  },
  {
    slug: "placeholder-product-6",
    name: "Mindfulness Journal",
    shortDescription: "Guided prompts to encourage daily reflection and gratitude.",
    imageUrl: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=1974&auto=format&fit=crop",
    imageAlt: "Mindfulness Journal",
    category: "Mental Health"
  },
];

export default function CataloguePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-10 md:py-12 bg-gradient-to-r from-accent/80 to-background">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
        
        <div className="container-custom mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-6">
              <Sparkles className="h-3 w-3 text-primary/70" />
              <span className="text-sm font-medium text-primary">Premium Collection</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Our Products</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Explore our range of premium wellness products, thoughtfully crafted to help you achieve optimal health and balance in your daily life.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-8 md:py-10">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-1">All Products</h2>
              <p className="text-muted-foreground max-w-2xl">
                Browse our complete collection of wellness products designed to support your health journey.
              </p>
            </div>
            
            <Button variant="outline" size="sm" className="gap-2 rounded-full">
              <Filter className="h-4 w-4" />
              <span>Filter Products</span>
            </Button>
          </div>
          
          {catalogueProducts.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-muted-foreground text-lg">No products found.</p>
              <Button asChild variant="outline" size="lg" className="mt-6 rounded-full">
                <Link href="/">Return Home</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {catalogueProducts.map((product) => (
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
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-primary/10 to-secondary/10 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 mix-blend-overlay opacity-30" 
             style={{ backgroundImage: 'url("/pattern.svg")', backgroundSize: '30px' }}></div>
        
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-3">Not Sure Where to Start?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-5">
            Our wellness experts are ready to guide you in finding the perfect products for your specific needs.
          </p>
          <Button asChild size="lg" className="rounded-full px-8 group">
            <Link href="/contact" className="inline-flex items-center gap-2">
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
} 