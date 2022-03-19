import { server } from "../config/index";
// import { MongoClient } from "mongodb";
import { useEffect } from "react";
import BlogHome from "../components/BlogHome";
import Header from "../components/Header";
export default function Home(props) {
  return (
    <>
      <Header bg={"home"} />
      <BlogHome blogPost={props.blogPost} />
    </>
  );
}
// const response = await fetch(`${server}/api/blog`);
// const result = await response.json();
// console.log(result.posts);
// getPost();
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
  const response = await fetch(`/api/blog`);
  const result = await response.json();
  console.log(result.posts);
  let array = [1, 2, 3, 4, 5];
  return {
    props: {
      blogPost: result.posts.map((post) => ({
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
