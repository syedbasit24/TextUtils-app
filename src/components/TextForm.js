import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };
  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("text cleared", "success");
  };

  const handleCopy = () => {
    console.log("copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.vatexlue);
    props.showAlert(" text copied", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extraspace removed", "success");
  };
  const [text, setText] = useState("");
  //   setText("statetext2");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <label Htmlfor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode == "dark" ? "grey" : "white",
              color: props.mode == "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleloClick}>
          convert to lower case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          copy
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          removeExtraspaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode == "dark" ? "white" : "#042743",
        }}
      >
        <h2>your text summary</h2>
        <p>
          {text.split(" ").length} char and {text.length} words
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "enter something to preview"}</p>
      </div>
    </>
  );
}
