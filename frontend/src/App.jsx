import React from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";

import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [code, setCode] = useState(` function sum() {
    return 1+2;}`);

  const [review, setReview] = useState("");

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const highlightWithPrism = (code) =>
    Prism.highlight(code, Prism.languages.javascript, "javascript");

  const handleCodeReview = async () => {
    const response = await axios.post(
      "https://ai-powered-code-reviewer-app.onrender.com/ai/get-review",
      {
        code,
      }
    );
    setReview(response.data.response);
  };

  return (
    <div className="container">
      {/* Left */}
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={highlightWithPrism}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 14,
              border: "1px solid #ddd",
              color: "#fff",
              borderRadius: "5px",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <button className="btn" onClick={handleCodeReview}>
          Review
        </button>
      </div>
      {/* right */}
      <div className="right">
        <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
      </div>
    </div>
  );
};

export default App;
