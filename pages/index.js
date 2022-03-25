import { MongoClient } from "mongodb";
import BlogHome from "../components/BlogHome";
import Header from "../components/Header";
export default function Home(props) {
  return (
    <>
      <Header bg={"home"}>
        <meta
          name="description"
          content="Whisper | The EveryOne Blog. Whispering To Your Eyes and Ears. This is a next.js project featuring beautiful layouts and theme changing "
        />
        <title>Whisper | The Everyone&apos;s Blog</title>
      </Header>
      <BlogHome blogPost={props.blogPost} />
    </>
  );
}
// export async function getServerSideProps(context) {
//   // fetch data from wherever
//   const req = context.req
//   const res = context.res
//   let array = [1, 2];
//   return {
//     props: {
//       blogPost: array,
//     },
//   };
// }
export async function getStaticProps() {
  // fetch data from wherever
  // FACED AN ABSOLUTE URL PROBLEM
  const connectString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.a1mvy.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(connectString);
  const db = client.db();
  const blogPostsCollection = db.collection("posts");
  const blogPosts = await blogPostsCollection.find().toArray();
  return {
    props: {
      blogPost: blogPosts.map((post) => ({
        name: post.name,
        title: post.title,
        url: post.url,
        category: post.category,
        story: post.story,
        date: post.date,
        id: post._id.toString(),
      })),
    },
    revalidate: 60,
  };
}
