import { useRouter } from "next/router";
import Header from "../../components/Header";
import Detail from "../../components/Detail";

const Index = (props) => {
  const router = useRouter();
  return (
    <>
      <Header />
      <Detail singlePost={props.singlePost} />
    </>
  );
};
export default Index;
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          blog: "detail",
        },
      },
      {
        params: {
          blog: "detail2",
        },
      },
      {
        params: {
          blog: "detail3",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const blogId = context.params.blog;
  console.log(blogId);
  let array = [1, 2, 3, 4, 5];
  return {
    props: {
      singlePost: array,
    },
  };
}
