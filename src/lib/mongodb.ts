// Lazy MongoDB connection helper
// - Avoids throwing at module import time so Next.js can build/collect page data
// - Call `getClientPromise()` at request/runtime to obtain a connected client

import { MongoClient } from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

/**
 * Returns a cached Promise<MongoClient>. Throws if MONGODB_URI is not set.
 * This is intentionally lazy so importing this module during build doesn't
 * attempt to connect or throw.
 */
export function getClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }

  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }

  return global._mongoClientPromise as Promise<MongoClient>;
}

export default getClientPromise;
