import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
const Header = ({ bg }) => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="My First Time With Next Js" />
        <link rel="icon" sizes="60x60" type="image/png" href="/bird.png" />
        <title>Learning Next.Js</title>
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
              <Link className="a" href="/create-new-blog">
                Create
              </Link>
            </Li>
            <Li single={bg}>
              <Link className="a" href="/individual-blog">
                Single
              </Link>
            </Li>
          </ul>
          <span>X</span>
        </div>
      </nav>
      <div></div>
    </>
  );
};
// style={{ background: "transparent" }}
export default Header;
const Li = styled.li`
  border-bottom: ${(props) => (props.create === "create" ? "2px dotted" : "")};
  border-bottom: ${(props) => (props.home === "home" ? "2px dotted" : "")};
  border-bottom: ${(props) => (props.single === "single" ? "2px dotted" : "")};
`;
