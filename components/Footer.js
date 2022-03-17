import styled from "styled-components";

const Footer = () => {
  return (
    <Foot className="bg">
      <div className="bg-p mb-10 footer-head">
        <h3>Contact Me</h3>
        <div className="footer-socials">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AlexChika"
          >
            <span data-tooltip="GitHub" className="bg">
              <i className="bi bi-github"></i>
            </span>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/chika-alex/"
          >
            <span data-tooltip="LinkedIn" className="bg">
              <i className="bi bi-linkedin"></i>
            </span>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:i.am.alex.chika@gmail.com"
          >
            <span data-tooltip="i.am.alex.chika@gmail.com" className="bg">
              <i className="bi bi-envelope"></i>
            </span>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://wa.me/2349024783759?text=Hello%20Alex,%20How%20You%20Bro"
          >
            <span data-tooltip="Whattsapp" className="bg">
              <i className="bi bi-whatsapp"></i>
            </span>
          </a>
          <a rel="noopener noreferrer" href="tel:+2349024783759">
            <span data-tooltip="+2349024783759" className="bg">
              <i className="bi bi-telephone"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="footer-end">
        <p>Blog Built With Next.Js, A React FrameWork.</p>
        <p>&copy; Alex Chika 2022 All Rights Reserved</p>
        <small> Check me out @</small> <br />
        <small>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://i-am-alex.netlify.app/"
          >
            https://i-am-alex.netlify.app/
          </a>
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
    font-style: italic;
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
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 3px;
      height: 60px;
      width: 60px;
      border-radius: 50px;
      i {
        font-size: 20px;
      }
    }
    span::after {
      content: attr(data-tooltip);
      position: absolute;
      background: rgba(255, 99, 71, 0.5);
      padding: 5px;
      color: white;
      width: max-content;
      text-align: center;
      font-size: 12px;
      top: 0;
      left: 50%;
      transform: translateX(-50%) translateY(-100%) scale(0);
      transition: transform 0.15s linear;
      transform-origin: bottom;
    }
    span:hover::after {
      transform: translateX(-50%) translateY(-100%) scale(1);
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
  @media screen and (max-width: 500px) {
    div .footer-socials {
      span {
        height: 50px;
        width: 50px;
      }
    }
  }
`;
