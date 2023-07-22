import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import styled from "styled-components";

const CodeEditor = () => {
  const [code, setCode] = useState("");

  const Container = styled.div`
    display: flex;
    flex-direction: row;
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
    height: 90%;
    width: 90%;
    border: none;
    font-size: 1.5rem;
    padding: 1rem;
    background-color: #1e1e1e;
    color: white;
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
        placeholder="Type some code..."
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
