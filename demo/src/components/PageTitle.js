import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const PageTitle = _=>
  <Title>
    { _.title}
  </Title>


export default PageTitle;