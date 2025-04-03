interface ProductDetailPageProps {
  params: {
    slug: string;
  };
  // searchParams can also be accessed if needed
}

// This component will be a Server Component by default
export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  // Direct access to params.slug is now allowed in Next.js
  const { slug } = params;

  return (
    <div className="container-custom mx-auto py-8 md:py-10">
      <h1 className="mb-3 text-3xl font-bold">Product Detail Page</h1>
      <p>Displaying product details for slug: <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm dark:bg-gray-700">{slug}</code></p>

      {/* Placeholder structure for product details */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Image Section (Placeholder) */}
        <div className="aspect-square w-full rounded bg-gray-200 flex items-center justify-center">
          <span className="text-muted-foreground">Image Placeholder</span>
        </div>

        {/* Details Section (Placeholder) */}
        <div>
          <h2 className="text-2xl font-semibold">Product Name (from slug: {slug})</h2>
          <p className="mt-3 text-muted-foreground">
            Detailed description for the product will go here. We will fetch this using the slug &apos;{slug}&apos; from our CMS.
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-medium">Key Benefits:</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>Benefit 1 (fetched based on slug)</li>
              <li>Benefit 2</li>
              <li>Benefit 3</li>
            </ul>
          </div>
          {/* Optional: Spec sheet download link */}
          {/* Optional: Gallery */}
        </div>
      </div>
    </div>
  );
}

// Optional: Add generateMetadata function if fetching title/description dynamically
// export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
//   const slug = params.slug;
//   // Fetch product data based on slug
//   // const product = await getProductBySlug(slug);
//   // return { title: product.name, description: product.shortDescription };
//   return { title: `Product: ${slug}` }; // Placeholder
// }

// Optional: Add generateStaticParams if using SSG for product pages
// export async function generateStaticParams() {
//   // Fetch all product slugs from Sanity
//   // const products = await getAllProductSlugs();
//   // return products.map((product) => ({ slug: product.slug }));
//   return [{ slug: 'placeholder-product-1' }, { slug: 'placeholder-product-2' }]; // Placeholder
// } 