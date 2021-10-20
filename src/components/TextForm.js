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
    navigator.clipboard.writeText(text);
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
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          convert to uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleloClick}>
          convert to lower case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>
          clear
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          copy
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          removeExtraspaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} char
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to read
        </p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "enter something to preview"}</p>
      </div>
    </>
  );
}
