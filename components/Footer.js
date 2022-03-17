import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
  return (
    <Foot className="bg">
      <div className="bg-p mb-10 footer-head">
        <h3>Contact Me</h3>
        <div className="footer-socials">
          <span className="bg">
            <Link href="">
              <i>hey</i>
            </Link>
          </span>
          <span className="bg">
            <Link href="">
              <i>hey</i>
            </Link>
          </span>
          <span className="bg">
            <Link href="">
              <i>hey</i>
            </Link>
          </span>
          <span className="bg">
            <Link href="">
              <i>hey</i>
            </Link>
          </span>
          <span className="bg">
            <Link href="">
              <i>hey</i>
            </Link>
          </span>
        </div>
      </div>
      <div className="footer-end">
        <p>Blog Built With Next.Js, A React FrameWork.</p>
        <p>&copy; Alex Chika 2022 All Rights Reserved</p>
        <small> Check me out @</small> <br />
        <small>
          <Link target="_blank" href="https://i-am-alex.netlify.app/">
            https://i-am-alex.netlify.app/
          </Link>
        </small>
      </div>
    </Foot>
  );
};

export default Footer;
const Foot = styled.footer`
  padding: 20px 0;
  div {
    width: 90vw;
    margin: 0 auto;
    text-align: center;
    h3 {
      opacity: 0.5;
    }
  }
  .footer-head {
    padding: 7px 0;
  }
  div .footer-socials {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      width: 60px;
      border-radius: 50px;
    }
  }
  .footer-end {
    font-size: 15px;
    padding: 7px 0 0 0;
    opacity: 0.5;
    a {
      color: teal;
    }
  }
`;
