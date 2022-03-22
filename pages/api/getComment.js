// // import { MongoClient } from "mongodb";
// async function handler(req, res) {
//   if (req.method === "POST") {
//     const postId = req.body.id;
//   }

//   const connectString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.a1mvy.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
//   const client = await MongoClient.connect(connectString);
//   const db = client.db();
//   const commentsCollection = db.collection("postId");
//   const comments = await commentsCollection.find().toArray();
// }

// ......//.....//
import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const postId = req.body.id;
    let client;
    let comments;
    const connectString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.a1mvy.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    try {
      client = await MongoClient.connect(connectString);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }
    const db = client.db();
    try {
      const commentsCollection = db.collection(postId);
      comments = await commentsCollection.find().toArray();
      // postId = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "fetching comment failed!" });
      return;
    }
    client.close();
    res
      .status(201)
      .json({ comments, message: "Comment fetched Successfully!" });
  }
}
export default handler;
