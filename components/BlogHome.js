import SingleBlog from "./SingleBlog";
import styled from "styled-components";
const Blog = ({}) => {
  return (
    <>
      <Hero className="mb-10 border bg">
        <div className="hero-hdng-con">
          <h1 className="hero-txt">
            Welcome To <span>Whisper</span>{" "}
          </h1>
          <span>
            <img src="/bird-64.png" alt="logo" />
          </span>
        </div>
        <p className="hero-txt-des mb-10">Whispering to your Eyes and Ears</p>
        <div className="hero-cards">
          <figure className="">
            <img src="/whisper1.jpeg" alt="" />
          </figure>
          <figure className="">
            <img src="/whisper2.jpeg" alt="" />
          </figure>
          <figure className="">
            <img src="/whisper3.jpeg" alt="" />
          </figure>
          <figure className="">
            <img src="/whisper4.jpg" alt="" />
          </figure>
          <figure className="">
            <img src="/whisper5.jpeg" alt="" />
          </figure>
        </div>
      </Hero>
      <Suggested className="mb-10 border"></Suggested>
      <SingleBlog />
    </>
  );
};
// className = "";

export default Blog;
const Hero = styled.div`
  min-height: 35vh;
  .hero-hdng-con {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero-txt,
  .hero-txt span {
    font-size: 30px;
    font-weight: 900;
    font-family: cursive;
    font-style: italic;
  }
  .hero-txt,
  .hero-txt-des {
    text-align: center;
  }
  .hero-cards {
    border: 2px solid red !important;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 150px);
    grid-template-areas:
      "whisper1 whisper2 whisper3"
      "whisper1 whisper4 whisper5";
    figure:nth-of-type(1) {
      grid-area: whisper1;
    }
    figure:nth-of-type(2) {
      grid-area: whisper2;
    }
    figure:nth-of-type(3) {
      grid-area: whisper3;
    }
    figure:nth-of-type(4) {
      grid-area: whisper4;
    }
    figure:nth-of-type(5) {
      grid-area: whisper5;
    }
    figure {
    }
    figure img {
      border-radius: 0px !important;
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 500px) {
    .hero-txt {
      font-size: 1.7em;
    }
    .hero-txt span {
      font-size: inherit;
    }
    .hero-cards {
      grid-template-rows: repeat(2, 100px);
    }
  }
  @media screen and (max-width: 320px) {
    .hero-txt {
      font-size: 1.5em;
    }
    .hero-txt span {
      font-size: inherit;
    }
  }
`;
/* ...... */

const Suggested = styled.div`
  height: 54vh;
  border: 2px solid red !important;
`;
