import { server } from "../config/index";
// import { useEffect } from "react";
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
  const response = await fetch(`${server}/api/blog`);
  const result = await response.json();
  console.log(result.posts);
  let array = [1, 2, 3, 4, 5];
  return {
    props: {
      blogPost: result.posts,
    },
    revalidate: 60,
  };
}
