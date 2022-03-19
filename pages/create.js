import { useRouter } from "next/router";
import Header from "../components/Header";
import AddPost from "../components/AddPost";

const Create = () => {
  const router = useRouter();
  async function add() {
    const response = await fetch("/api/createblog", {
      method: "POST",
      body: JSON.stringify({ name: "alex", message: "trials" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    console.log("i ran");
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
