// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const post = req.body;
    let postId;
    let client;
    const connectString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.a1mvy.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    try {
      client = await MongoClient.connect(connectString);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }
    const db = client.db();
    try {
      const collections = db.collection("posts");
      const result = await collections.insertOne(post);
      postId = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }
    client.close();

    res.status(201).json({ postId, message: "Successfully stored message!" });
  }
}
export default handler;
