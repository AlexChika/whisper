import { BallTriangle } from "react-loader-spinner";
import { getdate } from "./AddPost";
import Header from "./Header";
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
import { Banner } from "../components/BlogHome";
import styled from "styled-components";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
const Detail = ({ post, timeOut }) => {
  const id = post?._id;
  const { title, url, category, story, date } = post || {};
  const commentCollect = useRef(null);
  const [nameCollect, setNameCollect] = useState("");
  const [comments, setComments] = useState([]);
  const [showall, setShowall] = useState(false);
  const [accent, setAccent] = useState({
    color1: "tomato",
    color2: "rgb(17, 227, 241)",
  });
  useEffect(() => {
    if (localStorage.getItem("accent")) {
      setAccent(JSON.parse(localStorage.getItem("accent")));
    }
  }, []);
  const viewMoreComments = () => {
    setShowall(true);
  };
  const commentHandler = (e) => {
    setNameCollect(e.target.value);
  };
  async function postComment(commentobj) {
    try {
      const response = await fetch("/api/postcomment", {
        method: "POST",
        body: JSON.stringify(commentobj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status < 300 && response.status > 180) {
        // console.log("successfull");
        let result = await response.json();
        if (result.message === "Comment sent Successfully!") {
          // console.log("successfully succesful");
        }
      } else {
        let result = await response.json();
        if (result.message !== "Comment sent Successfully!") {
          // console.log("failed");
        }
      }
    } catch (e) {
      console.log("failed on 2");
    }
  }
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (
      !commentCollect.current.textContent ||
      commentCollect.current.textContent.trim().length < 2 ||
      !nameCollect ||
      nameCollect.trim().length < 4
    ) {
      e.currentTarget.style.boxShadow = "2px 2px 7px red";
      return;
    }
    e.currentTarget.style.boxShadow = "";
    const comment = commentCollect.current.textContent;
    const name = nameCollect;
    const date = getdate();
    const commentobj = { comment, name, id, date };
    commentCollect.current.textContent = "";
    await postComment(commentobj);
    setNameCollect("");
  };
  async function getComments() {
    try {
      const response = await fetch("/api/getComment", {
        method: "POST",
        body: JSON.stringify({ id: id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status < 300 && response.status > 180) {
        console.log("successfull");
        let result = await response.json();
        if (result.message === "Comment fetched Successfully!") {
          console.log("succesfully succesful on fetch");
          return result.comments;
        }
      } else {
        let result = await response.json();
        if (result.message !== "Comment fetched Successfully!") {
          console.log("failed");
          return [];
        }
      }
    } catch (e) {
      console.log("failed on 2");
    }
  }
  useEffect(() => {
    async function call() {
      const comments = await getComments();
      setComments(comments);
    }
    call();
  }, [id, nameCollect]);
  return (
    <>
      {post?.title ? (
        <>
          <Header>
            <meta name="description" content={title} />
            <title>Whisper | The Everyone&apos;s Blog</title>
          </Header>
          <Banner>
            <p>{title ? title.substr(0, 100) + "..." : ""}</p>
          </Banner>
          <Wrap accent={accent}>
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
                  <Link href="/">{category ? category : ""}</Link>
                </span>
                <abbr className="date-header mb-20" itemProp="datePublished">
                  {date}
                </abbr>
              </div>
              <div
                className="post-body"
                id=""
                itemProp="description articleBody"
              >
                <a
                  target="_blank"
                  className="mb-20"
                  rel="noopener noreferrer"
                  href="http://somewhere.com"
                >
                  <img src={url} alt="image" />
                </a>
                <p className="text mb-30">{story}</p>
              </div>
              <div className="post-footer">
                <div className="post-share">
                  <div>
                    <h4 className="mb-20 c-accent1">Comment Here </h4>
                    <form onSubmit={handleCommentSubmit}>
                      <div className="input-con mb-10 bg-p">
                        <label className="mb-10" htmlFor="comment">
                          Whisper Your Thoughts
                        </label>
                        <input
                          placeholder="Enter Your Name"
                          type="text"
                          id="name"
                          className="bg mb-10"
                          name="name"
                          value={nameCollect}
                          onChange={commentHandler}
                        />
                        <div
                          ref={commentCollect}
                          className="bg input"
                          id="comment"
                          contentEditable="true"
                        ></div>
                        <p></p>
                      </div>
                      <div className="submit-con">
                        <input type="submit" value="Comment" />
                        <button className="c-accent1">
                          <i className="bi bi-hand-thumbs-down-fill"></i>
                        </button>
                        <button className="c-accent2">
                          <i className="bi bi-heart-fill"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                  <span className="c-accent1">Share</span>
                  <div className="post-social">
                    <FacebookShareButton
                      url={`https://whispper.vercel.app/${id}`}
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <PinterestShareButton
                      url={`https://whispper.vercel.app/${id}`}
                    >
                      <PinterestIcon size={32} round />
                    </PinterestShareButton>
                    <RedditShareButton
                      url={`https://whispper.vercel.app/${id}`}
                    >
                      <RedditIcon size={32} round />
                    </RedditShareButton>
                    <WhatsappShareButton
                      url={`https://whispper.vercel.app/${id}`}
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <LinkedinShareButton
                      url={`https://whispper.vercel.app/${id}`}
                    >
                      <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                    <TwitterShareButton
                      url={`https://whispper.vercel.app/${id}`}
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                  </div>
                </div>
              </div>
            </article>
            <article className={`comment-con mb-30`}>
              <h3
                className={`no-comment ${
                  comments ? (comments.length > 0 ? "show" : "") : ""
                }`}
              >
                <span style={{ display: "block", textAlign: "center" }}>
                  😔😔😔
                </span>
                No Comments
              </h3>
              {comments.length > 0
                ? showall
                  ? comments
                      .slice(0)
                      .reverse()
                      .map((comobj) => {
                        const { name, comment, date, _id } = comobj;
                        return (
                          <div
                            key={_id}
                            className={`mb-10 bg comment ${
                              comments
                                ? comments.length > 0
                                  ? "show"
                                  : ""
                                : ""
                            }`}
                          >
                            <div className="comment-header bg-p">
                              <figure className="border">
                                <img src="/bird-32.png" alt="profile pic" />
                              </figure>
                              <span>{name}</span>
                            </div>
                            <p>{comment}</p>
                            <div className="comment-footer">
                              <span className="comment-time">{date}</span>
                            </div>
                          </div>
                        );
                      })
                  : comments
                      .slice(-2)
                      .reverse()
                      .map((comobj) => {
                        const { name, comment, date, _id } = comobj;
                        return (
                          <div
                            key={_id}
                            className={`mb-10 bg comment ${
                              comments
                                ? comments.length > 0
                                  ? "show"
                                  : ""
                                : ""
                            }`}
                          >
                            <div className="comment-header bg-p">
                              <figure className="border">
                                <img src="/bird-32.png" alt="profile pic" />
                              </figure>
                              <span>{name}</span>
                            </div>
                            <p>{comment}</p>
                            <div className="comment-footer">
                              <span className="comment-time">{date}</span>
                            </div>
                          </div>
                        );
                      })
                : ""}
              <button
                onClick={viewMoreComments}
                className={` c-accent2 ${
                  comments ? (comments.length > 2 ? "show" : "") : ""
                }`}
              >
                view more
              </button>
              <span className="comment-count">
                {comments ? comments.length : 0} comments
              </span>
            </article>
          </Wrap>
        </>
      ) : (
        <Load aria-label="loader" className="Loader">
          {timeOut ? (
            <div>Sorry! Post Not Found</div>
          ) : (
            <div>
              <BallTriangle
                heigth="100"
                width="100"
                color="grey"
                ariaLabel="loading-indicator"
              />
              One Moment...
            </div>
          )}
        </Load>
      )}
    </>
  );
};
export default Detail;
const Wrap = styled.section`
  .c-accent1 {
    color: ${(props) => (props.accent ? props.accent.color1 : "")};
  }
  .c-accent2 {
    color: ${(props) => (props.accent ? props.accent.color2 : "")};
  }
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  article {
    width: 100%;
    height: auto;
    min-height: 15vh;
    margin: 0 auto;
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
    /* .................. */
    .post-share {
      h4,
      label {
        text-align: center;
      }
      label {
        font-size: 14px;
      }
    }
    .post-share .input-con {
      padding: 10px;
      display: flex;
      flex-direction: column;
      .input {
        padding: 15px 10px;
      }
      input[type="text"] {
        padding: 10px 0;
      }
    }
    .post-share .submit-con {
      padding: 10px;
      display: flex;
      button {
        margin: 0 3px;
        padding: 5px 0;
        border-radius: 20px;
      }

      input[type="submit"] {
        border: 2px solid
          ${(props) => (props.accent ? props.accent.color2 : "")};
        flex: 0.5;
        background: none;
      }
      button {
        flex: 0.25;
        background: none;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        font-size: 30px;
      }
    }
    .post-share > span {
      text-align: center;
      margin-top: 40px;
      text-transform: uppercase;
      font-size: 20px;
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
    }
  }
  /* ..........second article........... */
  .comment-con {
    align-self: start;
    flex-direction: column;
    align-items: center;
    display: flex;
    padding: 5px;
    .no-comment {
      color: tomato;
      display: block;
    }
    .comment {
      display: none;
      padding: 5px;
      width: 100%;
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
      display: none;
      margin: 0 auto;
      background-color: transparent;
    }
    button.show {
      display: block;
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
    article {
      width: 75%;
    }
    .comment-con {
      .comment {
        width: 90%;
      }
    }
  }
  @media screen and (min-width: 1000px) {
    width: 90vw;
    article {
      width: 65%;
    }
    .comment-con {
      .comment {
        width: 75%;
      }
    }
  }
`;
const Load = styled.div`
  display: grid;
  place-items: center;
  min-height: 52vh;
  font-style: italic;
`;
