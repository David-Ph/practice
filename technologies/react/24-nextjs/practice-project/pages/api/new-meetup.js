// /api/new-meetup
// POST /api/new-meetup
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = MongoClient.connect(process.env.MONGO_URI);
    const db = client.db();

    const meetupsCollections = db.collection("meetups");
    const result = await meetupsCollections.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({
      message: "Ok",
    });
  }
}
