import styled from "styled-components";
import Header from "../components/Header";
import { useState, useReducer, useEffect } from "react";
import Router from "next/router";
const reducer = (state, action) => {
  if (action.type === "LIGHT_THEME") {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", "light");
    }
  }
  // ........
  if (action.type === "BLACK_THEME") {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", "dark");
    }
  }
  // ........
  if (action.type === "RB_ACCENT") {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "accent",
        JSON.stringify({ color1: "red", color2: " rgb(17, 227, 241)" })
      );
    }
  }
  // ........
  if (action.type === "PC_ACCENT") {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "accent",
        JSON.stringify({ color1: "pink", color2: "chocolate" })
      );
    }
  }
  // ........
  if (action.type === "GG_ACCENT") {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "accent",
        JSON.stringify({ color1: "gold", color2: "green" })
      );
    }
  }
  return state;
};
let initialState = {
  col1: "red",
  col2: "blue",
};
export default function Settings() {
  const [theme, setTheme] = useState("");
  const [accent, setAccent] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const themeHandleChange = (e) => {
    console.log(e.target.value);
    setTheme(e.target.value);
  };
  const accentHandleChange = (e) => {
    console.log(e.target.value);
    setAccent(e.target.value);
  };
  const HandleSettings = async (e) => {
    e.preventDefault();
    if (theme === "light") {
      dispatch({ type: "LIGHT_THEME" });
    }
    if (theme === "dark") {
      dispatch({ type: "BLACK_THEME" });
    }
    if (accent === "RB") {
      dispatch({ type: "RB_ACCENT" });
    }
    if (accent === "PC") {
      dispatch({ type: "PC_ACCENT" });
    }
    if (accent === "GG") {
      dispatch({ type: "GG_ACCENT" });
    }
    Router.push("/");
  };
  return (
    <>
      <Header bg={"settings"} />
      <SettingCon>
        <form className="bg" onSubmit={HandleSettings}>
          <h2 className="mb-20 c-accent1">Customize Your App&apos;s Theme</h2>
          <div className="input-con mb-10 bg-p">
            <h3>Themes</h3>
            <div className="input">
              <label className="thlab" htmlFor="light">
                <p>Light Theme</p>
                <span className="light"></span>
              </label>
              <input
                onChange={themeHandleChange}
                required
                value="light"
                type="radio"
                name="theme"
                id="light"
              />
            </div>
            {/* .......    //  ........ */}
            <div className="input">
              <label className="thlab" htmlFor="dark">
                <p>Dark Theme</p>
                <span className="dark"></span>
              </label>
              <input
                onChange={themeHandleChange}
                required
                type="radio"
                name="theme"
                id="dark"
                value="dark"
              />
            </div>
          </div>
          {/* .........   ..........  */}
          <div className="input-con mb-10 bg-p">
            <div>
              <h3>Accent Colors</h3>
              {/*....... //..... */}
              <div className="input">
                <label className="acclab" htmlFor="rb">
                  <p>Red and Blue</p>
                  <div>
                    <span className="rb"></span>
                    <span className="rb"></span>
                  </div>
                </label>
                <input
                  onChange={accentHandleChange}
                  value="RB"
                  required
                  type="radio"
                  name="accent"
                  id="rb"
                />
              </div>
              {/*....... //..... */}
              <div className="input">
                <label className="acclab" htmlFor="pc">
                  <p>Pink and Chocolate</p>
                  <div>
                    <span className="pc"></span>
                    <span className="pc"></span>
                  </div>
                </label>
                <input
                  onChange={accentHandleChange}
                  value="PC"
                  required
                  type="radio"
                  name="accent"
                  id="pc"
                />
              </div>
              {/*....... //..... */}
              <div className="input">
                <label className="acclab" htmlFor="gg">
                  <p>Gold and Green</p>
                  <div>
                    <span className="gg"></span>
                    <span className="gg"></span>
                  </div>
                </label>
                <input
                  onChange={accentHandleChange}
                  value="GG"
                  required
                  type="radio"
                  name="accent"
                  id="gg"
                />
              </div>
            </div>
            <p></p>
          </div>
          <div className="input-con bg-p">
            <input className="bg" type="submit" value="Customise" />
          </div>
        </form>
      </SettingCon>
    </>
  );
}
const SettingCon = styled.div`
  min-height: 90vh;
  display: grid;
  place-items: center;
  margin: 0 auto;
  font-family: "Dancing Script", cursive;
  form {
    margin: 0 auto;
    margin-bottom: 30px;
    text-align: center;
    padding: 30px;
    width: 97%;
    h3,
    h2 {
      text-align: center;
      font-family: "Dancing Script", cursive;
    }
    p {
      font-style: italic;
    }
    .input-con {
      padding: 10px;
      display: flex;
      flex-direction: column;
      input[type="submit"] {
        padding: 10px;
      }
    }
    .input {
      display: flex;
      align-items: center;
      /* border: 2px solid blue; */
      width: 100%;
      margin: 0 auto;
      margin-bottom: 10px;
      padding: 10px 0;
      justify-content: space-around;
      input[type="radio"] {
        transform: scale(2);
      }
      .thlab {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 0.6;
        span {
          display: inline-block;
          width: 50px;
          height: 20px;
        }
        .light {
          background: white;
        }
        .dark {
          background: black;
        }
      }
    }
  }
  .acclab {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0.7;
    span {
      display: inline-block;
      width: 50px;
      height: 20px;
    }
    .rb:first-of-type {
      background: red;
    }
    .rb:last-of-type {
      background: blue;
    }
    .pc:first-of-type {
      background: pink;
    }
    .pc:last-of-type {
      background: chocolate;
    }
    .gg:first-of-type {
      background: gold;
    }
    .gg:last-of-type {
      background: green;
    }
  }

  @media screen and (min-width: 768px) {
    .input {
      width: 60%;
    }
    form {
      width: 65%;
    }
  }
  @media screen and (min-width: 1000px) {
    width: 90vw;
    form {
      width: 60%;
    }
  }
`;
