import React from 'react';
import styled from 'styled-components';

import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light";
import js from 'react-syntax-highlighter/dist/languages/javascript';
import irBlack from 'react-syntax-highlighter/dist/styles/ir-black'; 

import { Flex, Box } from 'grid-styled'
import ReactMarkdown from 'react-markdown';
import PageTitle from './PageTitle';

import annotations from '../data/annotations';
import source from '../data/source';

registerLanguage('javascript', js);

const AnnotationsBox = styled(Box)`
  font-size: .8em;
  color: #333;
`;

const AnnotatedSource = _=>
  <div>
  <PageTitle title="Annotated Source" />
  <Flex wrap="wrap">
    <AnnotationsBox w={[1, 1/2, 1/2]} px={2}>
    <ReactMarkdown source={annotations} />
    </AnnotationsBox>
    <Box w={[1,1/2,1/2]} px={2}>
    <SyntaxHighlighter 
      language='javascript' 
      style={irBlack}
    >{source}</SyntaxHighlighter>
    </Box>
  </Flex>
</div>

export default AnnotatedSource;