import React, { useState, useEffect } from "react";
import { Highlight, themes } from "prism-react-renderer";
import styled from "styled-components";

const CodeEditor = () => {
  const [code, setCode] = useState(`
  <Editor
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter your code here..."
      />
`);

  useEffect(() => {
    const data = localStorage.getItem("code");
    if (data) {
      setCode(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("code", code);
  }, [code]);

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    item-align: center;
    justify-content: center;
    gap: 2rem;
    height: 100vh;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `;

  const Editor = styled.textarea`
    flex: 1;
    outline: none;
    font-family: "Courier New", Courier, monospace;
    height: 90%;
    width: 90%;
    border: none;
    font-size: 1.5rem;
    padding: 1rem;
    background-color: #1e1e1e;
    color: white;
    resize: none;
    border-radius: 5px;
    cursor: text;
    overflow: scroll;
    @media (max-width: 768px) {
      height: 50vh;
    }
  `;

  const Pre = styled.pre`
    flex: 1;
    font-size: 1.5rem;
    padding: 1rem;
    background-color: #1e1e1e;
    color: white;
    overflow: scroll;
    @media (max-width: 768px) {
      height: 50vh;
    }
  `;

  return (
    <Container>
      <Editor
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter your code here..."
        required={true}
        name="code"
        rows={10}
        cols={50}
        autofocus={true}
      />
      <Highlight theme={themes.dracula} code={code} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        )}
      </Highlight>
    </Container>
  );
};

export default CodeEditor;
