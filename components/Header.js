import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
const Header = ({ bg, children }) => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" sizes="60x60" type="image/png" href="/bird.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        {children}
      </Head>
      <nav className="nav mb-10">
        <div>
          <span>
            <Link href="/">
              <img
                style={{ cursor: "pointer" }}
                src="/bird-32.png"
                alt="logo"
              />
            </Link>
            <Link href="/">Whisper</Link>
          </span>
          <ul>
            <Li home={bg}>
              <Link className="a" href="/">
                Home
              </Link>
            </Li>
            <Li create={bg}>
              <Link className="a" href="/create">
                Create
              </Link>
            </Li>
            <Li settings={bg}>
              <Link className="a" href="/settings">
                Settings
              </Link>
            </Li>
          </ul>
        </div>
      </nav>
      <div></div>
    </>
  );
};
export default Header;
const Li = styled.li`
  border-bottom: ${(props) => (props.create === "create" ? "2px dotted" : "")};
  border-bottom: ${(props) => (props.home === "home" ? "2px dotted" : "")};
  border-bottom: ${(props) =>
    props.settings === "settings" ? "2px dotted" : ""};
`;
