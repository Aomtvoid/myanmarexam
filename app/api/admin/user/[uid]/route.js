import clientPromise from "@/app/lib/mongodb";

export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("AungYuki");
    const { uid } = await params;

    const user = await db.collection("students").findOne({ uid });

    if (!user) {
      return new Response(JSON.stringify({ user: null, success: false }), {
        status: 200,
      });
    }

    const { _id, uid: _, ...safeUser } = user;

    return new Response(JSON.stringify({ user: safeUser, success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "INTERNAL SERVER ERROR", success: false }),
      {
        status: 500,
      }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("AungYuki");
    const { uid } = await params;
    const data = await req.json();
    delete data._id;
    delete data.uid;
    delete data.qrCode;

    const result = await db
      .collection("students")
      .updateOne({ uid }, { $set: data });

    if (result.matchedCount === 0) {
      return new Response(
        JSON.stringify({ success: false, message: "User not found" }),
        {
          status: 404,
        }
      );
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "INTERNAL SERVER ERROR", success: false }),
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("AungYuki");
    const { uid } = await params;

    if (!uid) {
      return new Response(
        JSON.stringify({ success: false, message: "Missing UID" }),
        { status: 400 }
      );
    }

    const result = await db.collection("students").deleteOne({ uid });

    if (result.deletedCount === 0) {
      return new Response(
        JSON.stringify({ success: false, message: "Student not found" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Student deleted successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal server error" }),
      { status: 500 }
    );
  }
}
