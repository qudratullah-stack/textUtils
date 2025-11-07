import React, { useState, useRef } from "react";


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
    changemassage("Finished Extra Space");
    setTimeout(() => {
      changemassage("");
    }, 2000);
  };
  const [mode, changemode] = useState("Dark Mode");
  const darkmode = () => {
    if (mode === "Dark Mode") {
      parent_color.current.style.backgroundColor = "rgb(12, 68, 96)";
      document.body.style.backgroundColor = "#030338ff";
      textref.current.style.backgroundColor = "#adb3d2";
      textref.current.style.color = "white";
      changemode("Light mode");
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
  const bold_text = ()=>{
    let bold = textref.current.value= ' bold';
    changetext(bold)
  }
  const clear_txt =()=>{
    changetext('')
    changemassage('Text Cleared')
    setTimeout(() => {
        changemassage("");
      }, 2000);
  }
  return (
    <>
      <div className="parent1" ref={parent_color}>
        <div className="first_child">
          <p id="icon">T</p>
          <p id="parent_txet">Welcome TextUtils</p>
        </div>
        <button id="btn2" onClick={darkmode}>
          {mode}
        </button>
      </div>
      <div className="massage_parent">
        {massage && <div className="alert">{massage}</div>}
      </div>
      <div className="child">
        <h1 ref={pragraph}>{props.h1_text}</h1>
        <div className="box1">
        <button id="btn2" onClick={bold_text}>Bold</button>
        <button id="btn2">Italic</button>
        <button id="btn2" onClick={clear_txt}>Clear Text</button>
        <button id="btn2"></button>
        </div>
        <textarea
          name="text"
          id="text"
          rows={8}
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
