import { MongoClient } from 'mongodb';

let client;
let clientPromise;

const uri = process.env.MONGODB_URI;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri); // ❌ no extra options needed
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;