import { getDb } from "@/app/lib/db";
import clientPromise from "@/app/lib/mongodb";
import { nanoid } from "nanoid";
import QRCode from "qrcode";

export async function GET() {
  try {
    const db = await getDb();
    const users = await db.collection("students").find({}).toArray();
    return new Response(JSON.stringify({ users }), {
      data: users,
      success: true,
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "INTERNAL SERVER ERROR" }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("AungYuki");

    const user = await req.json();
    if (!user || Object.keys(user).length === 0) {
      return new Response(JSON.stringify({ error: "Missing user data" }), {
        status: 400,
      });
    }

    const uid = nanoid();
    const link = `${process.env.PUBLIC_BASE_URL}/uid/${uid}`;
    const qrCode = await QRCode.toDataURL(link);

    const newUser = {
      ...user,
      uid,
      qrCode,
    };

    const result = await db.collection("students").insertOne(newUser);

    return new Response(JSON.stringify({ result, success: true }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "INTERNAL SERVER ERROR" }), {
      status: 500,
    });
  }
}
