import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config();

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'e8zn4o7p',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-21',
  useCdn: false, // Disable CDN for real-time updates
  token: process.env.SANITY_API_TOKEN || 'skpOiD2zoGORDMibQNMzCF3WpZFrCLmH2z9648XdJOz08gDjazzIZd2lD0Q8P2lXnK1lJZYTuP7rmHW2HPaJ6vEJa3LhTFSY0YdjJgkEnYzEFQSJ3jqSJXeVZtssohjDuGnC2hHV6LMkfd8dSa3BGtUNBZ9Hu3LS4NymsXii1J7H8K6knJic',
});

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.SANITY_API_TOKEN) {
  console.warn('Warning: Missing required environment variables for Sanity client.');
}



export default client;