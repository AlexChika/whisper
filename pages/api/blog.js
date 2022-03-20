import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "GET") {
    const connectString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.a1mvy.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    const client = await MongoClient.connect(connectString);
    const db = client.db();
    const blogPostsCollection = db.collection("posts");
    const blogPosts = await blogPostsCollection.find().toArray();
    client.close();
    res.status(201).json({ posts: blogPosts });
  }
}
export default handler;
