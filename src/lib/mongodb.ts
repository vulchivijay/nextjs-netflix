import { MongoClient } from 'mongodb';

// MongoDB connection helper
// - Exposes a cached Promise<MongoClient> so parts of the app can `await clientPromise`
// - Uses a global variable to avoid creating multiple connections during HMR in dev
// - Requires process.env.MONGODB_URI to be set to a valid connection string

const uri = process.env.MONGODB_URI;
if (!uri) {
  // Fail fast during server startup so developers notice the missing env var
  throw new Error('Please define the MONGODB_URI environment variable');
}

declare global {
  // Allow global caching of the client promise between module reloads in dev.
  // This prevents opening multiple connections during Hot Module Replacement.
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!global._mongoClientPromise) {
  // Create a new MongoClient instance and connect immediately. We store the
  // resulting promise on the global object so it can be reused across reloads.
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

// Export the client connection promise for other modules to use.
clientPromise = global._mongoClientPromise as Promise<MongoClient>;

export default clientPromise;
