import SingleBlog from "./SingleBlog";
import styled from "styled-components";
import image from "../public/stripeImage.png";
const Blog = ({}) => {
  return (
    <>
      <Hero className="mb-10 border bg">
        <h1 className="hero-txt">
          Welcome To <span>Whisper</span> <span>EE</span>
        </h1>
        <p className="hero-txt-des mb-10">Whispering to your Eyes and Ears</p>
        <div className="hero-balls">
          <figure className=""></figure>
          <figure className=""></figure>
          <figure className=""></figure>
          <figure className=""></figure>
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
  height: 35vh;
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
  .hero-balls {
    display: flex;
    justify-content: center;
    height: 35vh;
    figure {
      display: inline-block;
      height: 20vh;
      width: 20vh;
      margin: 0 auto;
    }
    figure:nth-of-type(1) {
      background: url("/whiser1");
    }
    figure:nth-of-type(2) {
      background: url("/whiser2");
    }
    figure:nth-of-type(3) {
      background: url("/whiser3");
    }
    figure:nth-of-type(4) {
      background: url("/whiser4");
    }
  }
  @media screen and (max-width: 500px) {
    .hero-txt {
      font-size: 1.7em;
    }
    .hero-txt span {
      font-size: inherit;
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
`;
