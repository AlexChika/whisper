import React from "react";
import styled from "styled-components";

const SingleBlog = ({ id }) => {
  let comment = true;
  return (
    <Wrap comment={comment} className="posts mb-30">
      <meta content={""} property="og:title" />
      <meta content={""} property="og:description" />
      <meta content="article" property="og:type" />
      <meta content={""} property="og:url" />
      <meta content={""} property="og:site_name" />
      <meta content="" itemProp="image_url" />
      <article className="post bg  mb-10">
        <h3 className="mb-20" itemProp="name">
          We are ready to Meet Baby No. 3. Checking into hospital for my 3rd
          C-Section in Lagos. I'm nervous but confident in God
        </h3>
        <div class="post-header">
          <span class="post-labels mb-10">
            <a href="/" rel="tag">
              Category
            </a>
          </span>
          <abbr class="date-header mb-20" itemprop="datePublished">
            Saturday, March 12, 2022
          </abbr>
        </div>
        <div class="post-body" id="" itemprop="description articleBody">
          <a className="mb-20" href="link to image">
            <img src="/whisper5.jpeg" alt="" />
          </a>
          <p className="text mb-30">
            We are ready to Meet Baby No. 3. Checking into hospital for my 3rd
            C-Section in Lagos. I'm nervous but confident in God. Follow my baby
            updates by subscribing to my YouTube channel We are ready to Meet
            Baby No. 3. Checking into hospital for my 3rd C-Section in Lagos.
            I'm nervous but confident in God. Follow my baby updates by
            subscribing to my YouTube channel
          </p>
        </div>
        <div className="post-footer">
          <span className="mb-30 border">
            <a href="">Read More</a>
          </span>
          <div className="post-share">
            <span>Share</span>
            <div className="post-social">
              <span className="border">F</span>
              <span className="border">t</span>
              <span className="border">tg</span>
              <span className="border">m</span>
              <span className="border">i</span>
            </div>
            <button>Leave a comment</button>
          </div>
        </div>
      </article>
      <article className={`comment-con border mb-30 `}>
        <h3 className={`no-comment ${comment ? "show" : ""}`}>
          <span style={{ display: "block", textAlign: "center" }}>😔😔😔</span>
          No Comments
        </h3>
        <div className="comment-inner">
          <div className={`mb-10 bg comment ${comment ? "show" : ""}`}>
            <div className="comment-header bg-p">
              <figure className="border">
                <img src="/bird-32.png" alt="profile pic" />
              </figure>
              <span>name names</span>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              iusto pariatur atque natus itaque quidem.
            </p>
            <div className="comment-footer">
              <span className="comment-time">12th, tue dec 2022</span>
            </div>
          </div>
          <div className={`mb-10 bg comment ${comment ? "show" : ""}`}>
            <div className="comment-header bg-p">
              <figure className="border">
                <img src="/bird-32.png" alt="profile pic" />
              </figure>
              <span>name names</span>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              iusto pariatur atque natus itaque quidem.
            </p>
            <div className="comment-footer">
              <span className="comment-time">12th, tue dec 2022</span>
            </div>
          </div>
          <div className={`mb-10 bg comment ${comment ? "show" : ""}`}>
            <div className="comment-header bg-p">
              <figure className="border">
                <img src="/bird-32.png" alt="profile pic" />
              </figure>
              <span>name names</span>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              iusto pariatur atque natus itaque quidem.
            </p>
            <div className="comment-footer">
              <span className="comment-time">12th, tue dec 2022</span>
            </div>
          </div>

          <button className={` ${comment ? "show" : ""}`}>view more</button>
        </div>
        <span className="comment-count">no comments</span>
      </article>
    </Wrap>
  );
};

export default SingleBlog;
const Wrap = styled.section`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  article {
    width: 100%;
    height: auto;
    min-height: 15vh;
  }
  .post {
    * {
      display: block;
    }
    padding: 30px 20px;
    h3 {
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 500;
    }
    .post-header {
      text-align: center;
      font-style: italic;
    }
    .post-header abbr {
      opacity: 0.7;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .text {
      letter-spacing: 1px;
      line-height: 25px;
      font-size: 14px;
      text-align: justify;
    }
    .post-footer > span {
      margin: 0 auto;
      width: 12em;
      padding: 15px;
      text-align: center;
      cursor: pointer;
    }
    .post-share > span {
      text-align: center;
      margin-top: 40px;
      text-transform: uppercase;
      font-size: 20px;
    }
    .post-share .post-social {
      display: flex;
      width: 260px;
      margin: 0 auto;
      justify-content: space-around;
    }
    .post-share .post-social span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      width: 40px;
      border-radius: 50px;
      margin-top: 10px;
      margin-bottom: 20px;
    }
    .post-share button {
      text-align: center;
      margin: 0 auto;
      font-size: 20px;
      background: none;
      color: skyblue;
    }
    .post-share button:active,
    .post-share button:focus {
      color: blue;
    }
  }
  .comment-con {
    align-self: start;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    max-height: 1000px;
    display: flex;
    padding: 5px;
    .comment-inner {
      overflow-y: auto;
    }
    .no-comment {
      color: tomato;
      display: block;
    }
    .comment {
      display: none;
      padding: 5px;
      .comment-header {
        display: flex;
        align-items: center;
        padding: 3px 5px;
      }
      .comment-header figure {
        height: 35px;
        width: 35px;
        border-radius: 50%;
        margin-right: 10px;
      }
      p {
        font-size: 13px;
        padding: 10px;
        padding: 3px 0;
      }
    }
    .no-comment.show {
      display: none;
    }
    .comment.show {
      display: block;
    }
    .comment-footer {
      opacity: 0.5;
      font-size: 13px;
    }
    button {
      padding: 10px;
      color: tomato;
      display: none;
    }
    button.show {
      display: block;
      padding: 10px;
      color: tomato;
      margin: 0 auto;
    }
    > span {
      opacity: 0.5;
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 500px) {
    .post {
      h3 {
        font-size: 18px;
      }
    }
  }
  @media screen and (min-width: 760px) {
    flex-direction: row;
    article:first-of-type {
      width: 55%;
    }
    article:last-of-type {
      width: 40%;
    }
  }
  @media screen and (min-width: 1000px) {
    width: 90vw;
    flex-direction: row;
    article:first-of-type {
      width: 50%;
    }
    article:last-of-type {
      width: 30%;
    }
  }
`;
/*
      border: 2px solid red;
.comment.show {
      display: ${(props) => {
        return props.comment ? "block" : "none";
      }};
    }
*/
