import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Define the SanityImageSource type
interface SanityImageSource {
  asset?: {
    _ref: string;
    _type: string;
  };
  _type?: string;
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-04-03'; // Use a recent API version

if (!projectId || !dataset) {
  throw new Error(
    'Sanity project ID and/or dataset name not configured. Check your .env.local file.'
  );
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: typeof document === 'undefined', // Use CDN in server-side renders, disable for previews/mutations
  // perspective: 'published', // Default perspective
  // token: process.env.SANITY_API_READ_TOKEN // Only required for authenticated requests (e.g., drafts)
});

// Helper function for generating Image URLs with only the asset reference data in your documents
// Read more: https://www.sanity.io/docs/image-url
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  // Ensure that source image has a valid asset ref for urlFor
  if (!source || !source.asset) {
    return undefined; // Or return a placeholder image URL
  }
  return builder.image(source).auto('format').fit('max');
} 