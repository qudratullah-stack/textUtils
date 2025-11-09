import React, { useState, useRef } from "react";

export default function Contact(props) {
  const [text, settext] = useState("");
  const [massage, setmassage] = useState("");
  const textref = useRef();

  const handlevalue = (e) => {
    settext(e.target.value);
  };
  const touppercase = () => {
    settext(text.toUpperCase());
    setmassage("Text Changed into Uppercase");

    setTimeout(() => {
      setmassage("");
    }, 2000);
  };
  const tolowercase = () => {
    settext(text.toLowerCase());
    setmassage("Text Changed into Lowercase");
    setTimeout(() => {
      setmassage("");
    }, 2000);
  };
  const copy = () => {
    navigator.clipboard.writeText(textref.current.value);
    setmassage("Text Copied");
    setTimeout(() => {
      setmassage("");
    }, 2000);
  };
  const extraspace = () => {
    let newtext = text.replace(/[ ]+/g, " ");
    settext(newtext);
    setmassage("Finished Extra Space");
    setTimeout(() => {
      setmassage("");
    }, 2000);
  };
  const [mode_txt, setmode_txt] = useState("Light Mode");
  const [dark, setdark] = useState(false);
  const handleMode = () => {
    setdark(!dark);
    if (dark) {
      document.body.style.backgroundColor = "rgba(244, 248, 248, 1)";
      setmassage("You Added Light Mode");
      setTimeout(() => {
        setmassage("");
      }, 2000);
    } else {
      setmode_txt("Dark Mode");
      document.body.style.backgroundColor = "#121212";
      setmassage("You Added Dark Mode");
      setTimeout(() => {
        setmassage("");
      }, 2000);
    }
  };

  const [isbold, changebold] = useState(false);
  const bold_text = () => {
    changebold(!isbold);
    setmassage("Text Size Changed");
    setTimeout(() => {
      setmassage("");
    }, 2000);
  };
  const [isitalic, changeitalic] = useState(false);
  const italic_txt = () => {
    changeitalic(!isitalic);
    setmassage("Text style Changed");
    setTimeout(() => {
      setmassage("");
    }, 2000);
  };
  const clear_txt = () => {
    settext("");
    setmassage("Text Cleared");
    setTimeout(() => {
      setmassage("");
    }, 2000);
  };
  const reverse = () => {
    settext(text.split("").reverse().join(""));
    setmassage("Text Reversed");
    setTimeout(() => {
      setmassage("");
    }, 2000);
  };
  return (
    <>
      <div className={dark ? "mode_dark" : "light"}>
        <div className="navbar">
          <div className="first_child">
            <p id="icon">T</p>
            <p id="parent_txet">Welcome TextUtils</p>
          </div>
          <button id="primary_btn" onClick={handleMode}>
            {mode_txt}
          </button>
        </div>
        <div className="massage_parent">
          {massage && <div className="alert">{massage}</div>}
        </div>
        <div className="child">
          <h1>{props.h1_text}</h1>
          <div className="box1">
            <button id="primary_btn" onClick={bold_text}>
              Bold
            </button>
            <button id="primary_btn" onClick={italic_txt}>
              Italic
            </button>
            <button id="primary_btn" onClick={clear_txt}>
              Clear Text
            </button>
            <button id="primary_btn" onClick={reverse}>
              Reverse
            </button>
          </div>
          <textarea
            name="text"
            id="text"
            rows={8}
            ref={textref}
            value={text}
            onChange={handlevalue}
            style={{
              fontWeight: isbold ? "bolder" : "normal",
              fontStyle: isitalic ? "italic" : "inherit",
            }}
          ></textarea>
          <div className="box1">
            <button id="secondry_btn" onClick={touppercase}>
              Change To Uppercase
            </button>
            <button id="secondry_btn" onClick={tolowercase}>
              Change To Lowercase
            </button>
            <button id="secondry_btn" onClick={extraspace}>
              Finish Extra Spaces
            </button>
            <button id="secondry_btn" onClick={copy}>
              Copy
            </button>
          </div>
        </div>
        <div className="second_child">
          <p>
            {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length}
            Words And {text.replace(/\s/g, "").length} Characters
          </p>
          <p>
            Read Time{" "}
            {(text.split(/\s+/).filter((element) => {
              return element !== 0;
            }).length * 0.008).toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
}
