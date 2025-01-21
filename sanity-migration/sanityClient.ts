// sanityClient.ts
import { createClient } from '@sanity/client';
import dotenv from "dotenv";

dotenv.config();
export const client = createClient({
  projectId: 'e8zn4o7p', // Replace with your project ID
  dataset: 'production',        // Or your dataset name
  apiVersion: '2024-01-21',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token: 'skpOiD2zoGORDMibQNMzCF3WpZFrCLmH2z9648XdJOz08gDjazzIZd2lD0Q8P2lXnK1lJZYTuP7rmHW2HPaJ6vEJa3LhTFSY0YdjJgkEnYzEFQSJ3jqSJXeVZtssohjDuGnC2hHV6LMkfd8dSa3BGtUNBZ9Hu3LS4NymsXii1J7H8K6knJic',
});
