import { getMongoClient } from "@/lib/mongodb";
import { LINKS } from "@/lib/links";

async function getClicksCollection() {
  const client = await getMongoClient();
  return client.db().collection<{ _id: string; count: number }>("clicks");
}

export async function GET() {
  const collection = await getClicksCollection();
  const docs = await collection.find().toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }

  return Response.json(counts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const linkId = body?.linkId;

  if (typeof linkId !== "string" || !LINKS.some((link) => link.id === linkId)) {
    return Response.json({ error: "Invalid linkId" }, { status: 400 });
  }

  const collection = await getClicksCollection();
  const result = await collection.findOneAndUpdate(
    { _id: linkId },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" }
  );

  return Response.json({ count: result?.count ?? 1 });
}
