import { MongoClient } from "mongodb";
import BlogHome from "../components/BlogHome";
import Header from "../components/Header";
// import { useEffect, useState } from "react";
// import { server } from "../config/index";
export default function Home(props) {
  // const [posts, setPosts] = useState([]);
  // async function getBlogPosts() {
  //   const response = await fetch("/api/blog");
  //   const result = await response.json();
  //   setPosts(result.posts);
  // }
  // useEffect(() => {
  //   getBlogPosts();
  // }, []);
  return (
    <>
      <Header bg={"home"} />
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
  console.log(process.env.mongodb_username);
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
