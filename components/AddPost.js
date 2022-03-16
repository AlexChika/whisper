// import { useEffect,useState, useReducer } from "react";
import styled from "styled-components";
import { Banner } from "../components/BlogHome";
const AddPost = () => {
  const error = () => {
    return {
      color: "red",
      text: "text text text",
    };
  };
  const changeHandler = (e) => {
    console.log(e);
    if (e?.target?.value !== "") {
      return "tomato";
    }
    return "palegreen";
  };
  return (
    <>
      <Banner>
        <h1>Whisper A Post</h1>
        <h3>Lets Hear It</h3>
      </Banner>
      <Section>
        <form className="bg">
          <h2 className="mb-10">Create A Post</h2>
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
            />
            <p style={{ color: `${error().color}` }}>{error().text}</p>
          </div>
          <div className="input-con mb-10 bg-p">
            <label className="mb-10" htmlFor="url">
              Image Url
            </label>
            <input
              onChange={changeHandler}
              placeholder="Enter A Valid Url"
              type="text"
              id="url"
              className="bg mb-10"
              name="url"
            />
            <p></p>
          </div>
          <div className="input-con mb-10 bg-p">
            <label className="mb-10" htmlFor="category">
              Category
            </label>
            <select className="mb-10" id="category">
              <option selected disabled value="hey">
                Please Select A Category
              </option>
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
    margin: 0 auto;
    padding: 30px;
    min-height: 80vh;
    width: 97%;
    h2 {
      text-align: center;
    }
    .input-con {
      padding: 10px;
      display: flex;
      flex-direction: column;
      input,
      select,
      textarea {
        padding: 15px 10px;
        border: none;
        outline: none;
      }
      textarea {
        max-width: 100%;
        min-width: 100%;
      }
      input[type="submit"] {
      }
      option {
        margin-bottom: 20px;
      }
    }
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
