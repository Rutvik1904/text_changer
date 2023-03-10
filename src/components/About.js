import React from "react";

export default function About(props) {

  let myStyle = {
    border:props.mode === "dark" ? "1px solid white" : "1px solid dark",
    background: props.mode === "dark" ? "#2a4e69" : "white",
    color: props.mode === "dark" ? "white" : "black",
  }
  return (
    <div className="container my-4">
      <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
        About Us
      </h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              style={myStyle}
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong> Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              class="accordion-body"
              style={myStyle}
            >
              Text Changer gives you a way to analyze your text quickly and
              efficiently . Be it word count, character count or
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
               style={myStyle}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              class="accordion-body"
              style={myStyle}
            >
              Text Changer is a free character counter tool that provides
              isntant character count & word count statistics for given text.
              Text Changer reports the number of words and Charcters.Thus it is
              a suitable for writing text with word/character limit.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
               style={myStyle}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              class="accordion-body"
              style={myStyle}
            >
              This Text Changer software work on any web-browser such as
              Chrome,Firefox,Internet Explorer,Safari, Opera.It suit to count
              characters in Facebook,Blog,books , excle document,pdf
              document,essays etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
