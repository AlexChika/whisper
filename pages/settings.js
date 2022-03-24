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
  if (action.type === "TB_ACCENT") {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "accent",
        JSON.stringify({ color1: "tomato", color2: " rgb(17, 227, 241)" })
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
  if (action.type === "GV_ACCENT") {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "accent",
        JSON.stringify({ color1: "gold", color2: "violet" })
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
    if (accent === "TB") {
      dispatch({ type: "TB_ACCENT" });
    }
    if (accent === "PC") {
      dispatch({ type: "PC_ACCENT" });
    }
    if (accent === "GV") {
      dispatch({ type: "GV_ACCENT" });
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
                <label className="acclab" htmlFor="tb">
                  <p>Tomato and Blue</p>
                  <div>
                    <span className="tb"></span>
                    <span className="tb"></span>
                  </div>
                </label>
                <input
                  onChange={accentHandleChange}
                  value="TB"
                  required
                  type="radio"
                  name="accent"
                  id="tb"
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
                <label className="acclab" htmlFor="gv">
                  <p>Gold and Violet</p>
                  <div>
                    <span className="gv"></span>
                    <span className="gv"></span>
                  </div>
                </label>
                <input
                  onChange={accentHandleChange}
                  value="GV"
                  required
                  type="radio"
                  name="accent"
                  id="gv"
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
      width: 100%;
      margin: 0 auto;
      margin-bottom: 10px;
      padding: 10px 0;
      justify-content: space-between;
      input[type="radio"] {
        transform: scale(1.5);
      }
      .thlab {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 0.9;
        span {
          display: inline-block;
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        .light {
          background: white;
        }
        .dark {
          background: black;
          box-shadow: inset 1px 1px 1px gray;
        }
      }
    }
  }
  .acclab {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0.9;
    span {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .tb:first-of-type {
      background: tomato;
    }
    .tb:last-of-type {
      background: rgb(17, 227, 241);
    }
    .pc:first-of-type {
      background: pink;
    }
    .pc:last-of-type {
      background: chocolate;
    }
    .gv:first-of-type {
      background: gold;
    }
    .gv:last-of-type {
      background: violet;
    }
  }
  @media screen and (max-width: 340px) {
    .thlab,
    .acclab {
      flex-direction: column;
    }
  }

  @media screen and (min-width: 768px) {
    .input {
      width: 60%;
    }
    form {
      width: 65%;
    }
    .thlab {
      span {
        width: 50px;
        height: 20px;
        border-radius: 10px;
      }
    }
    .acclab {
      span {
        width: 50px;
        height: 20px;
        border-radius: 10px;
      }
    }
  }
  @media screen and (min-width: 1000px) {
    width: 90vw;
    form {
      width: 60%;
    }
  }
`;
