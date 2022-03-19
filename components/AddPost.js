import { useEffect, useState, useReducer } from "react";
import styled from "styled-components";
import { Banner } from "../components/BlogHome";
let pass = {
  names: false,
  title: false,
  url: false,
  category: false,
  story: false,
};
const AddPost = ({ add }) => {
  const [inputs, setInputs] = useState({
    name: "",
    title: "",
    url: "",
    category: "Please Select A Category",
    story: "",
  });
  const onChangeHandler = (e) => {
    const form = e.target.parentElement.parentElement;
    form.classList.remove("show");
    const submitBtn = form.querySelector("input[type=submit]");
    const name = e.target.name;
    const value = e.target.value;
    if (name === "name") {
      if (value.length < 5) {
        e.target.nextElementSibling.style.color = "red";
        e.target.nextElementSibling.textContent = "Name Is Too Short";
        pass = { ...pass, names: false };
      } else {
        e.target.nextElementSibling.style.color = "";
        e.target.nextElementSibling.textContent = "";
        pass = { ...pass, names: true };
      }
    }
    if (name === "title") {
      if (value.length < 100) {
        e.target.nextElementSibling.style.color = "red";
        e.target.nextElementSibling.textContent =
          "Title Must Be Atleast 100 Characters";
        pass = { ...pass, title: false };
      } else {
        e.target.nextElementSibling.style.color = "";
        e.target.nextElementSibling.textContent = "";
        pass = { ...pass, title: true };
      }
    }
    if (name === "url") {
      let res = value.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
      );
      if (res == null) {
        e.target.nextElementSibling.style.color = "red";
        e.target.nextElementSibling.textContent = "Invalid Url";
        pass = { ...pass, url: false };
      } else {
        e.target.nextElementSibling.style.color = "";
        e.target.nextElementSibling.textContent = "";
        pass = { ...pass, url: true };
      }
    }
    if (name === "category") {
      if (value.length < 4 || value === "Please Select A Category") {
        e.target.nextElementSibling.style.color = "red";
        e.target.nextElementSibling.textContent = "Please Select Category";
        pass = { ...pass, category: false };
      } else {
        e.target.nextElementSibling.style.color = "";
        e.target.nextElementSibling.textContent = "";
        pass = { ...pass, category: true };
      }
    }
    if (name === "story") {
      if (value.length < 150) {
        e.target.nextElementSibling.style.color = "red";
        e.target.nextElementSibling.textContent =
          "Story Must Be Atleast 150 characters";
        pass = { ...pass, story: false };
      } else {
        e.target.nextElementSibling.style.color = "";
        e.target.nextElementSibling.textContent = "";
        pass = { ...pass, story: true };
      }
    }
    let { names, title, url, category, story } = pass;
    if (names && title && url && category && story) {
      console.log("passed");
      submitBtn.style.backgroundColor = "#67ff61";
      setInputs({ ...inputs, [name]: value, passed: true });
    } else {
      submitBtn.style.backgroundColor = "tomato";
      setInputs({ ...inputs, [name]: value, passed: false });
    }
  };
  function getdate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const cal = new Date();
    const date = cal.getDate();
    let hour = cal.getHours();
    let sub;
    if (date === 1 || date === 21 || date === 31) {
      sub = "ist";
    } else if (date === 2 || date === 22) {
      sub = "nd";
    } else if (date === 3 || date === 23) {
      sub = "rd";
    } else {
      sub = "th";
    }
    let am;
    if (hour > 12) {
      hour = hour - 12;
      am = "pm";
    } else {
      am = "am";
    }
    return `${days[cal.getDay()]} ${date + sub} ${
      months[cal.getMonth()]
    } ${hour}:${cal.getMinutes()}${am}`;
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { name, title, url, category, story, passed } = inputs;
    if (!passed || passed === false) {
      e.target.classList.add("show");
    } else {
      let newPost = { ...inputs, date: getdate() };
      console.log(newPost);
      add(newPost);
      // setInputs({
      //   name: "",
      //   title: "",
      //   url: "",
      //   category: "Please Select A Category",
      //   story: "",
      // });
      // pass = {
      //   names: false,
      //   title: false,
      //   url: false,
      //   category: false,
      //   story: false,
      // };
      // e.target.querySelector("input[type=submit]").style.backgroundColor =
      //   "gray";
    }
  };
  useEffect(() => {
    // add();
  });
  // add();
  const inputError = (name, lim, text) => {
    if (name.length < lim) {
      return {
        color: "red",
        text: text,
      };
    }
    return {
      color: "",
      text: "",
    };
  };
  return (
    <>
      <Banner>
        <h1>Whisper A Post</h1>
        <h3>Lets Hear It</h3>
      </Banner>
      <Section className="mb-30">
        <form onSubmit={onSubmitHandler} className="bg">
          <h2 className="mb-10">Create A Post</h2>
          <div className="input-con mb-10 bg-p">
            <label className="mb-10" htmlFor="name">
              Full Names
            </label>
            <input
              placeholder="Enter Your Name"
              type="text"
              id="name"
              className="bg mb-10"
              name="name"
              value={inputs.name}
              onChange={onChangeHandler}
            />
            <p></p>
          </div>
          <div className="input-con mb-10 bg-p">
            <label className="mb-10" htmlFor="title">
              Title or Heading
            </label>
            <input
              placeholder="Please Enter The Heading"
              type="text"
              id="title"
              className="bg mb-10"
              name="title"
              value={inputs.title}
              onChange={onChangeHandler}
            />
            <p></p>
          </div>
          <div className="input-con mb-10 bg-p">
            <label className="mb-10" htmlFor="url">
              Image Url
            </label>
            <input
              placeholder="Enter A Valid Url"
              type="text"
              id="url"
              className="bg mb-10"
              name="url"
              value={inputs.url}
              onChange={onChangeHandler}
            />
            <p></p>
          </div>
          <div className="input-con mb-10 bg-p">
            <label className="mb-10" htmlFor="category">
              Category
            </label>
            <select
              value={inputs.category}
              name="category"
              onChange={onChangeHandler}
              className="mb-10 bg"
              id="category"
            >
              <option disabled>Please Select A Category</option>
              <option value="hello">Health</option>
              <option value="hello">Tech</option>
              <option value="hello">Celeb</option>
              <option value="hello">Finance</option>
              <option value="hello">Relationship</option>
            </select>
            <p></p>
          </div>
          <div className="input-con mb-10 bg-p">
            <label className="mb-10" htmlFor="story">
              What Happened ?
            </label>

            <textarea
              placeholder="Please Whisper The Latest In Here"
              type="text"
              name="story"
              id="story"
              className="bg mb-10"
              cols="30"
              rows="10"
              value={inputs.story}
              onChange={onChangeHandler}
            ></textarea>
            <p></p>
          </div>
          <div className="input-con">
            <input type="submit" value="Submit For A Review" />
          </div>
        </form>
      </Section>
    </>
  );
};

export default AddPost;
const Section = styled.section`
  margin: 0 auto;
  form {
    position: relative;
    margin: 0 auto;
    padding: 30px;
    min-height: 80vh;
    width: 97%;
    h2 {
      text-align: center;
    }
    p {
      font-size: 14px;
    }
    .input-con {
      padding: 10px;
      display: flex;
      flex-direction: column;
      input,
      select,
      textarea {
        padding: 15px 10px;
      }
      textarea {
        max-width: 100%;
        min-width: 100%;
      }
      input[type="submit"] {
        background: grey;
      }
      option {
        margin-bottom: 20px;
      }
    }
  }
  form:after {
    content: "Pls Fill All Fields Correctly";
    text-align: center;
    color: white;
    position: absolute;
    width: 50%;
    transform: translateX(50%);
    height: 20px;
    background: red;
    left: 0;
    bottom: 11%;
    font-style: italic;
    font-size: 13px;
    opacity: 0;
  }
  form.show:after {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    form {
      width: 65%;
    }
  }
  @media screen and (min-width: 1000px) {
    width: 90vw;
    form {
      width: 60%;
    }
  }
`;
