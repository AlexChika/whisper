import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "GET") {
    const connectString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.a1mvy.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    const client = await MongoClient.connect(connectString);
    const db = client.db();
    const blogPostsCollection = db.collection("posts");
    const blogPosts = blogPostsCollection.find().toArray();
    console.log(blogPosts);
    client.close();
    res.status(201).json({ posts: [1, 2, 3, 4, 5, 6, 7, 8] });
  }
}
export default handler;
