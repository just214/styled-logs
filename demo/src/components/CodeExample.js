import React from 'react';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light"
import js from 'react-syntax-highlighter/dist/languages/javascript';
import irBlack from 'react-syntax-highlighter/dist/styles/ir-black'; 
import styled from 'styled-components';

const CodeWrapper = styled.div`
  text-align: left;
  height: auto;
  scroll: auto;
`;

registerLanguage('javascript', js);

const CodeExample = ({code})=>
  <CodeWrapper>
    <SyntaxHighlighter 
      language='javascript' 
      style={irBlack}
    >{code}</SyntaxHighlighter>
</CodeWrapper>

export default CodeExample;

    
    