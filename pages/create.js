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
      <Header bg={"create"}>
        <meta
          name="description"
          content="Whisper To The World at  Whisper | The EveryOne's Blog. Whispering To Your Eyes and Ears. This is a next.js project featuring beautiful layouts and theme changing "
        />
        <title>Create Post At Whisper | The Everyone&apos;s Blog</title>
      </Header>
      <AddPost add={add} />
    </>
  );
};

export default Create;
