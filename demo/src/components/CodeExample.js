import React from 'react';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light"
import js from 'react-syntax-highlighter/dist/languages/javascript';
import docco from 'react-syntax-highlighter/dist/styles/docco'; 
import styled from 'styled-components';

const CodeWrapper = styled.div`
  margin: 10px;
  text-align: left;
  height: auto;
  scroll: auto;
`;

registerLanguage('javascript', js);

const CodeExample = ({code})=>
  <CodeWrapper>
    <SyntaxHighlighter 
      language='javascript' 
      style={docco}
    >{code}</SyntaxHighlighter>
</CodeWrapper>

export default CodeExample;

    
    