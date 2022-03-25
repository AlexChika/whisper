import Header from "../components/Header";
import Detail from "../components/Detail";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const Index = (props) => {
  const [post, setPost] = useState({});
  const [timeOut, setTimeOut] = useState(false);
  const router = useRouter();
  const id = router.query.blog;
  async function getPost() {
    try {
      const response = await fetch("/api/oneblog", {
        method: "POST",
        body: JSON.stringify({ id: id, test: "one" }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status < 300 && response.status > 180) {
        // console.log("successfull");
        let result = await response.json();
        if (result.message === "Successfully stored message!") {
          setPost(result.post);
          setTimeOut(false);
        }
      } else {
        let result = await response.json();
        if (result.message !== "Successfully stored message!") {
          // console.log("failed");
          setTimeOut(true);
        }
      }
    } catch (e) {
      // console.log("failed on 2");
      setTimeOut(true);
    }
  }
  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <>
      <Detail post={post} timeOut={timeOut} />
    </>
  );
};
export default Index;
