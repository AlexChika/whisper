import Header from "../components/Header";
import AddPost from "../components/AddPost";

const Create = () => {
  async function add(post) {
    try {
      const response = await fetch("/api/createblog", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status < 300 && response.status > 180) {
        // console.log("successfull");
        let result = await response.json();
        if (result.message === "Successfully stored message!") {
          return [true];
        }
      } else {
        let result = await response.json();
        if (result.message !== "Successfully stored message!") {
          // console.log("failed");
          return [false];
        }
      }
    } catch (e) {
      return [false];
    }
  }
  return (
    <>
      <Header bg={"create"} />
      <AddPost add={add} />
    </>
  );
};

export default Create;
