import { Banner } from "../components/BlogHome";
import styled from "styled-components";
import Link from "next/link";
const Detail = () => {
  let comment = true;
  return (
    <>
      <Banner>
        <p>
          WE ARE READY TO MEET BABY NO. 3. CHECKING INTO HOSPITAL FOR MY 3RD
          C-SECTION IN LAGOS. I&apos;M NERVOUS BUT CONFIDENT IN GOD
        </p>
      </Banner>
      <Wrap>
        <meta content="" property="og:title" />
        <meta content="" property="og:description" />
        <meta content="article" property="og:type" />
        <meta content="" property="og:url" />
        <meta content="" property="og:site_name" />
        <meta content="" itemProp="image_url" />
        <article className="post bg  mb-10">
          <h3 className="mb-20" itemProp="name">
            We are ready to Meet Baby No. 3. Checking into hospital for my 3rd
            C-Section in Lagos. I&apos;m nervous but confident in God
          </h3>
          <div className="post-header">
            <span className="post-labels mb-10">
              <Link href="/" rel="tag">
                Category
              </Link>
            </span>
            <abbr className="date-header mb-20" itemProp="datePublished">
              Saturday, March 12, 2022
            </abbr>
          </div>
          <div className="post-body" id="" itemProp="description articleBody">
            <a
              target="_blank"
              className="mb-20"
              rel="noopener noreferrer"
              href="http://somewhere.com"
            >
              <img src="/whisper5.jpeg" alt="image" />
            </a>
            <p className="text mb-30">
              We are ready to Meet Baby No. 3. Checking into hospital for my 3rd
              C-Section in Lagos. I&apos;m nervous but confident in God. Follow
              my baby updates by subscribing to my YouTube channel We are ready
              to Meet Baby No. 3. Checking into hospital for my 3rd C-Section in
              Lagos. I&apos;m nervous but confident in God. Follow my baby
              updates by subscribing to my YouTube channel my baby updates by
              subscribing to my YouTube channel We are ready to Meet Baby No. 3.
              Checking into hospital for my 3rd C-Section in Lagos. I&apos;m
              nervous but confident in God. Follow my baby updates by
              subscribing to my YouTube channel my baby updates by subscribing
              to my YouTube channel We are ready to Meet Baby No. 3. Checking
              into hospital for my 3rd C-Section in Lagos. I&apos;m nervous but
              confident in God. Follow my baby updates by subscribing to my
              YouTube channel my baby updates by subscribing to my YouTube
              channel We are ready to Meet Baby No. 3. Checking into hospital
              for my 3rd C-Section in Lagos. I&apos;m nervous but confident in
              God. Follow my baby updates by subscribing to my YouTube channel
            </p>
          </div>
          <div className="post-footer">
            <div className="post-share">
              <div>
                <h4 className="mb-20">Comment Here </h4>
                <form>
                  <div className="input-con mb-10 bg-p">
                    <label className="mb-10" htmlFor="comment">
                      Whisper Your Thoughts
                    </label>
                    <div
                      className="bg input"
                      id="comment"
                      contentEditable="true"
                    ></div>
                  </div>
                  <div className="submit-con">
                    <input type="submit" value="Comment" />
                    <button className="border">
                      Like <i className="bi bi-heart-fill"></i>
                    </button>
                    <button className="border">
                      Dislike <i className="bi bi-hand-thumbs-down-fill"></i>
                    </button>
                  </div>
                </form>
              </div>
              <span>Share</span>
              <div className="post-social">
                <span className="border">
                  <i className="bi bi-facebook"></i>
                </span>
                <span className="border">
                  <i className="bi bi-instagram"></i>
                </span>
                <span className="border">
                  <i className="bi bi-twitter"></i>
                </span>
              </div>
            </div>
          </div>
        </article>
        <article className={`comment-con mb-30`}>
          <h3 className={`no-comment ${comment ? "show" : ""}`}>
            <span style={{ display: "block", textAlign: "center" }}>
              😔😔😔
            </span>
            No Comments
          </h3>
          <div className={`mb-10 bg comment ${comment ? "show" : ""}`}>
            <div className="comment-header bg-p">
              <figure className="border">
                <img src="/bird-32.png" alt="profile pic" />
              </figure>
              <span>name names</span>
            </div>
            <p>adipisicing elit. Eaque</p>
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
              adipisicing elit. Eaque Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Ipsa, impedit eaque! Deserunt excepturi amet,
              iure rem repellendus sunt cupiditate itaque non facere eos labore
              reiciendis, suscipit magni vel. Quasi ad quos doloribus ut quis
              assumenda inventore sint at incidunt optio sit vero est, dolores
              recusandae provident alias veritatis nulla. Beatae.
            </p>
            <div className="comment-footer">
              <span className="comment-time">12th, tue dec 2022</span>
            </div>
          </div>
          <button className={` ${comment ? "show" : ""}`}>view more</button>
          <span className="comment-count">no comments</span>
        </article>
      </Wrap>
    </>
  );
};
export default Detail;
const Wrap = styled.section`
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
      input[type="submit"] {
        background: tomato;
      }
    }
    .post-share .submit-con {
      padding: 10px;
      display: flex;
      input,
      button {
        margin: 0 3px;
        padding: 15px 10px;
        border-radius: 20px;
      }
      input[type="submit"] {
        background: tomato;
        flex: 0.5;
      }
      button {
        flex: 0.25;
        background: none;
        display: flex;
        align-items: center;
        justify-content: center;
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
    .post-share .post-social span {
      height: 40px;
      width: 40px;
      margin: 0 3px;
      border-radius: 50px;
      margin-top: 10px;
      margin-bottom: 20px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      i {
        font-size: 20px;
      }
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
