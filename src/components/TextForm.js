import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [cpy, setCpy] = useState(false);

  const handleOnChange = (event) => {
    setText(event.target.value);
    setCpy(false);
  };
  const handleOnUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlertMesg("Converted to Uppercase !", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);

    setCpy(true);
  };
  const handleOnLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlertMesg("Converted to Lowercase !", "success");
  };

  const handleOnRemoveSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleClear = () => {
    setText("");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <button
            disabled={text.length === 0}
            className="btn btn-success mx-1 my-1"
            style={{ float: "right" }}
            onClick={handleCopy}
          >
            <span>{cpy ? "Copied!" : "Copy"}</span>
          </button>
          <textarea
            className="form-control my-3"
            style={{
              background: props.mode === "dark" ? "#2a4e69" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            value={text}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          onClick={handleOnUpClick}
          className={`btn btn-warning mx-1 my-1`}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleOnLoClick}
          className="btn btn-info mx-1 my-1"
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleOnRemoveSpaces}
          className="btn btn-secondary mx-1 my-1"
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-1 my-1"
          // style={{ float: "right" }}
          onClick={handleClear}
        >
          Clear
        </button>
      </div>

      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          Words :{" "}
          {
            text.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length
          }
        </p>
        <p>Charcters : {text.replace(/ /g, "").length}</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview..!"}</p>
      </div>
    </>
  );
}
