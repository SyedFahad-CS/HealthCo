import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export interface ProductCardProps {
  slug: string;
  name: string;
  shortDescription: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
  isNew?: boolean;
  category?: string;
}

export function ProductCard({
  slug,
  name,
  shortDescription,
  imageUrl,
  imageAlt,
  className,
  isNew,
  category
}: ProductCardProps) {
  return (
    <Card className={cn(
      "overflow-hidden group h-full flex flex-col transition-all duration-300 hover:-translate-y-1",
      className
    )}>
      <Link
        href={`/products/${slug}`}
        className="flex flex-col h-full"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {isNew && (
            <div className="absolute top-3 left-3 z-10">
              <Badge variant="default">New</Badge>
            </div>
          )}
          {category && (
            <div className="absolute top-3 right-3 z-10">
              <Badge variant="secondary">{category}</Badge>
            </div>
          )}
        </div>
        <CardContent className="flex-grow p-5">
          <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {shortDescription}
          </p>
        </CardContent>
        <CardFooter className="p-5 pt-0">
          <div className="flex items-center text-primary">
            <span className="text-sm font-medium">Learn more</span>
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
} 