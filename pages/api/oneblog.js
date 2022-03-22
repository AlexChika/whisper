import { MongoClient, ObjectId } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const id = req.body.id;
    console.log(id);
    const connectString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.a1mvy.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    const client = await MongoClient.connect(connectString);
    const db = client.db();
    const blogPostsCollection = db.collection("posts");
    const onePost = await blogPostsCollection.findOne({
      _id: ObjectId(id),
    });
    client.close();
    res
      .status(201)
      .json({ message: "Successfully stored message!", post: onePost });
  }
}
export default handler;
