// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";
async function handler(req, res) {
  const { name, message } = req.body;
  if (req.method === "POST") {
    if (!name || name.trim() === "" || !message || message.trim() === "") {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    const post = {
      name,
      message,
    };
    console.log(
      process.env.mongodb_username,
      process.env.mongodb_password,
      process.env.mongodb_clustername,
      process.env.mongodb_database
    );
    let client;
    const connectString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.a1mvy.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    const connectString1 =
      "mongodb+srv://mcluckey1:icui4cuicu2@alexcluster.a1mvy.mongodb.net/whisper?retryWrites=true&w=majority";
    if (connectString === connectString1) {
      console.log(true);
    } else {
      console.log(false);
    }

    try {
      client = await MongoClient.connect(connectString);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }
    const db = client.db();
    try {
      const collections = await db.collection("posts");
      //  const collections = await db.collection("posts").insertOne(post);
      //  const result = collections.insertOne()
      //  post.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }
    client.close();

    res.status(201).json({ message: "Successfully stored message!" });
  }
}
export default handler;
