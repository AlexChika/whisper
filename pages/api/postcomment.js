import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const postId = req.body.id;
    const comment = req.body.comment;
    const name = req.body.name;
    const date = req.body.date;
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
      const collections = db.collection(postId);
      const result = await collections.insertOne({
        comment: comment,
        name: name,
        date: date,
      });
      // postId = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Comment failed!" });
      return;
    }
    client.close();

    res.status(201).json({ message: "Comment sent Successfully!" });
  }
}
export default handler;
