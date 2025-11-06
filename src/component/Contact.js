import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Contact(props) {
  const [text, changetext] = useState("");
  const [massage, changemassage] = useState("");
  const textref = useRef();
  const parent_color = useRef();
  const pragraph = useRef();
  const handlevalue = (e) => {
    changetext(e.target.value);
  };
  const touppercase = () => {
    changetext(text.toUpperCase());
    changemassage("Text Change into Uppercase");
    setTimeout(() => {
      changemassage("");
    }, 2000);
  };
  const tolowercase = () => {
    changetext(text.toLowerCase());
    changemassage("Text Change into Lowercase");
    setTimeout(() => {
      changemassage("");
    }, 2000);
  };
  const copy = () => {
    navigator.clipboard.writeText(textref.current.value);
    changemassage("Text Copied");
    setTimeout(() => {
      changemassage("");
    }, 2000);
  };
  const extraspace = () => {
    let newtext = text.replace(/[ ]+/g, " ");
    changetext(newtext);
    changemassage("Finish Extra Space");
    setTimeout(() => {
      changemassage("");
    }, 2000);
  };
  const [mode, changemode] = useState("Dark Mode");
  const darkmode = () => {
    if (mode === "Dark Mode") {
      parent_color.current.style.backgroundColor = "#0d0da1ff";
      document.body.style.backgroundColor = "#030338ff";
      textref.current.style.backgroundColor = "gray";
      textref.current.style.color = "white";
      changemode("white mode");
      pragraph.current.style.color = "white";
      changemassage("You Add Dark Mode");
      setTimeout(() => {
        changemassage("");
      }, 2000);
    } else {
      parent_color.current.style.backgroundColor = "#06355cff";
      document.body.style.backgroundColor = "white";
      textref.current.style.color = "black";
      textref.current.style.backgroundColor = "white";
      pragraph.current.style.color = "black";
      changemode("Dark Mode");
      changemassage("You Add Light Mode");
      setTimeout(() => {
        changemassage("");
      }, 2000);
    }
  };
  return (
    <>
      <div className="parent1" ref={parent_color}>
        <h1>{props.qudrat}</h1>

        <nav>
          <Link to="/header">Header</Link>
          <Link to="/about">About</Link>
        </nav>
        

        <button id="btn2" onClick={darkmode}>
          {mode}
        </button>
      </div>
      {massage && <div className="alert">{massage}</div>}
      <div className="child">
        <p ref={pragraph} id="p1">
          Inter your Text For Edit
        </p>
        <textarea
          name="text"
          id="text"
          rows={12}
          ref={textref}
          value={text}
          onChange={handlevalue}
        ></textarea>
        <div className="box1">
          <button id="btn" onClick={touppercase}>
            Change To Uppercase
          </button>
          <button id="btn" onClick={tolowercase}>
            Change To Lowercase
          </button>
          <button id="btn" onClick={extraspace}>
            Finish Extra Space
          </button>
          <button id="btn" onClick={copy}>
            Copy
          </button>
        </div>
      </div>
    </>
  );
}
