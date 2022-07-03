// /api/new-meetup
// POST /api/new-meetup
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    await client.connect();
    const database = client.db("nextjs_meetups");

    const meetupsCollections = database.collection("meetups");
    const result = await meetupsCollections.insertOne(data);

    client.close();

    res.status(201).json({
      message: "Ok",
    });
  }
}
