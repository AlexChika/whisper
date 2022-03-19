import { useState, useEffect } from "react";
import Link from "next/link";
// import useRouter from "next/router";
import styled from "styled-components";
import {
  TwitterIcon,
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

const SingleBlog = ({ post }) => {
  const { id, name, title, url, category, story, date } = post;
  // const router = useRouter()
  // const navigate =(linkid)=>{
  //   router.push('/' + linkid)
  // }

  let comment = true;
  return (
    <Wrap comment={comment} className="posts mb-30">
      <meta content="" property="og:title" />
      <meta content="" property="og:description" />
      <meta content="article" property="og:type" />
      <meta content="" property="og:url" />
      <meta content="" property="og:site_name" />
      <meta content="" itemProp="image_url" />
      <article className="post bg  mb-10">
        <h3 className="mb-20" itemProp="name">
          {title}
        </h3>
        <div className="post-header">
          <span className="post-labels mb-10">
            <Link href="/" rel="tag">
              {category}
            </Link>
          </span>
          <abbr className="date-header mb-20" itemProp="datePublished">
            {date}
          </abbr>
        </div>
        <div className="post-body" id="" itemProp="description articleBody">
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="mb-20"
            href="/link-to-image"
          >
            <img src={url} alt={title} />
          </a>
          <p className="text mb-30">{story}</p>
        </div>
        <div className="post-footer">
          <span className="mb-30 border">
            <Link href="/detail">Read More</Link>
          </span>
          <div className="post-share">
            <span>Share</span>
            <div className="post-social">
              <FacebookShareButton url={"https://whispper.vercel.app/detail/"}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <PinterestShareButton url={"https://whispper.vercel.app/detail/"}>
                <PinterestIcon size={32} round />
              </PinterestShareButton>
              <RedditShareButton url={"https://whispper.vercel.app/detail/"}>
                <RedditIcon size={32} round />
              </RedditShareButton>
              <WhatsappShareButton url={"https://whispper.vercel.app/detail/"}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <LinkedinShareButton url={"https://whispper.vercel.app/detail/"}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <TwitterShareButton url={"https://whispper.vercel.app/detail/"}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>
            <button>Leave a comment</button>
          </div>
          <p className="poster">{name}</p>
        </div>
      </article>
      <article className={`comment-con border mb-30`}>
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
      font-style: italic;
    }
    .post-share .post-social {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }
    .post-share .post-social * {
      margin: 0 3px;
      margin-top: 10px;
      margin-bottom: 10px;
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
    .poster {
      font-size: 13px;
      opacity: 0.5;
      text-align: center;
      margin-top: 10px;
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
