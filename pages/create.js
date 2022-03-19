import { useRouter } from "next/router";
import Header from "../components/Header";
import AddPost from "../components/AddPost";

const Create = () => {
  const router = useRouter();
  async function add(post) {
    const response = await fetch("/api/createblog", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    console.log("i ran");
    // if(){}
    // router.push('')
  }
  return (
    <>
      <Header bg={"create"} />
      <AddPost add={add} />
    </>
  );
};

export default Create;
