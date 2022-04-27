import SingleBlog from "./SingleBlog";
import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
const Blog = ({ blogPost }) => {
  const [accent, setAccent] = useState({
    color1: "tomato",
    color2: "rgb(17, 227, 241)",
  });
  useEffect(() => {
    if (localStorage.getItem("accent")) {
      setAccent(JSON.parse(localStorage.getItem("accent")));
    }
  }, []);
  useEffect(() => {
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
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
      <Suggested accent={accent} className="mb-30 border">
        <div className="suggested">
          {blogPost
            .slice(0, 8)
            .reverse()
            .map((post) => {
              const { url, title, category, date, name, id } = post;
              return (
                <Link key={post.id} href={`/${id}`}>
                  <div className="sug-card-con bg">
                    <figure className="">
                      <img src={url} alt="" />
                    </figure>
                    <div className="sug-desc-con">
                      <p className="sug-nme c-accent1">{name}</p>
                      <p className="sug-title">{title.substr(0, 55) + "..."}</p>
                      <div className="sug-dt bg-p">
                        <p>{date}</p>
                        <span>{category}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </Suggested>
      <main>
        {blogPost
          .slice()
          .reverse()
          .map((post) => {
            return <SingleBlog post={post} key={post.id} />;
          })}
      </main>
    </>
  );
};
export default Blog;
export const Banner = ({ children }) => {
  return (
    <Hero className="mb-30">
      <div className="hero-hdng-con">
        <h1 className="hero-txt">
          Welcome To <span>Whisper</span>{" "}
        </h1>
      </div>
      <p className="hero-txt-des mb-10">Whispering to your Eyes and Ears</p>
      <div className="hero-cards border">
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
  .c-accent1 {
    color: ${(props) => (props.accent ? props.accent.color1 : "")};
  }
  .c-accent2 {
    color: ${(props) => (props.accent ? props.accent.color2 : "")};
  }
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
    height: 38vh;
  }
  figure img {
    height: 100%;
    width: 100%;
  }
  .sug-desc-con {
    padding: 5px 10px;
    line-height: 1.2em;
  }
  .sug-title {
    font-weight: 100;
    font-size: 15px;
    padding: 5px 0;
  }
  .sug-nme {
    font-style: italic;
  }
  .sug-dt {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    font-style: italic;
    span {
      padding-right: 20px;
    }
  }
`;
