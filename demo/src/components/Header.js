import React from 'react';
import styled from 'styled-components';
import { ButtonOutline, Heading, Small, Banner } from 'rebass';
import { Link, withRouter } from 'react-router-dom';

const MainBanner = styled(Banner)`
  height: 300px;
  min-height: 300px;
`;

const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

const Tagline = styled.p`
  color: #e425e2;
  background-color: RGBa(000,000,000, .3);
  border-radius: 5px;
  padding: 2px;
`;

const Title = Heading.extend`
  color: #F5F5F5;
  text-shadow: 3px 1px 5px #000000;
`;

const Header = _=>
  <MainBanner
    color='#333'
    bg='white'
    backgroundImage='bg.jpg'
  >
    <Wrapper>
      <Title f={[5,6,7]}>
        <img src="styled-logs-caret.png" alt="styled-logs logo" width={90} />
        &nbsp; styled-logs
      </Title>
      <Tagline>Styled console.logs with modern JavaScript</Tagline>
      <Small color="white"> ~25 lines of JavaScript and 0 dependencies</Small>
      <br />
      <br />
      <ButtonOutline 
        is="a" 
        href="https://github.com/gojutin/styled-logs" 
        target="_blank"
        color="white"
        children="GitHub" 

      />	&nbsp;
      <Link to={ _.location.pathname === "/" ? "/code": "/"}>
        <ButtonOutline  
          children={ _.location.pathname === "/" ? "Annotated Source": "Interactive Demo"}
          style={{cursor: "pointer", width: 175 + "px"}}
          color="white"
        />
      </Link>
      <br />
      <br />
    </Wrapper>
  </MainBanner>

export default withRouter(Header);