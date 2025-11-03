import clientPromise from "./mongodb";

let cachedDb = null;

export async function getDb() {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    const client = await clientPromise;
    const db = client.db("AungYuki");

    if (!db) throw new Error("Database not found");

    cachedDb = db; 
    return cachedDb;
  } catch (err) {
    console.error("getDb error:", err);
    throw err;
  }
}
