import SingleBlog from "./SingleBlog";
import { useEffect, useState } from "react";
import styled from "styled-components";
const Blog = ({ blogPost }) => {
  useEffect(() => {
    document.addEventListener("contextmenu", function (e) {
      // e.preventDefault();
    });
    document.onkeydown = function (e) {
      if (e.keyCode == 123) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
        return false;
      }
    };
  }, []);
  return (
    <>
      <Banner>
        <h1>Your No1 Blog</h1>
      </Banner>
      <h3
        className="mb-20 "
        style={{ textAlign: "center", fontStyle: "italic" }}
      >
        Most Viewed (Popular) Posts
      </h3>
      <Suggested className="mb-30 border">
        <button className="bg color">see more..</button>
        <div className="suggested">
          {blogPost.map((post) => {
            return (
              <div key={post.id} className="sug-card-con bg">
                <figure className="">
                  <img src="/whisperanim.png" alt="" />
                </figure>
                <div className="sug-desc-con">
                  <p className="sug-title">
                    This guest bedroom was so blaaag unwelcoming. Take a look at
                    my
                  </p>
                  <p className="sug-ctg">category</p>
                  <div className="sug-dt bg-p">
                    <p>14th march 2022</p>
                    <span>com</span> <span>lik</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Suggested>
      <main>
        {blogPost.map((post) => {
          return <SingleBlog post={post} key={post.id} />;
        })}
      </main>
    </>
  );
};
export default Blog;

export const Banner = ({ children }) => {
  return (
    <Hero className="mb-30 border">
      <div className="hero-hdng-con">
        <h1 className="hero-txt">
          Welcome To <span>Whisper</span>{" "}
        </h1>
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
        <div className="hero-overlay">{children}</div>
      </div>
    </Hero>
  );
};

const Hero = styled.div`
  overflow: hidden;
  .hero-txt,
  .hero-txt span {
    font-size: 30px;
    font-style: italic;
  }
  .hero-txt,
  .hero-txt-des {
    text-align: center;
  }
  .hero-txt-des {
    font-size: 14px;
  }
  .hero-cards {
    position: relative;
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
  .hero-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: grid;
    text-align: center;
    place-items: center;
    letter-spacing: 15px;
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.5);
  }
  @media screen and (max-width: 768px) {
    .hero-cards {
      grid-template-rows: repeat(2, 120px);
    }
    .hero-overlay {
      letter-spacing: 10px;
      font-size: 1.5rem;
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
    .hero-overlay {
      letter-spacing: 5px;
      font-size: 1rem;
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
  position: relative;
  padding: 5px;
  .suggested {
    height: 54vh;
    width: 100%;
    white-space: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-scroll-snap-type: x mandatory;
    -moz-scroll-snap-type: x mandatory;
    -ms-scroll-snap-type: x mandatory;
  }
  button {
    position: absolute;
    width: 100px;
    height: 35px;
    right: 0;
    opacity: 0.5;
  }
  .sug-card-con {
    display: inline-block;
    -webkit-scroll-snap-align: start;
    -moz-scroll-snap-align: start;
    -ms-scroll-snap-align: start;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    width: 280px;
    white-space: pre-wrap;
    margin-right: 1em;
  }
  figure {
    height: 39vh;
  }
  figure img {
    height: 100%;
    width: 100%;
  }
  .sug-desc-con {
    padding: 5px 5px;
  }
  .sug-title {
    font-weight: 100;
    font-size: 15px;
  }
  .sug-ctg {
    opacity: 0.5;
  }
  .sug-dt {
    font-size: 13px;
    display: flex;
    justify-content: space-around;
    color: tomato;
  }
`;
