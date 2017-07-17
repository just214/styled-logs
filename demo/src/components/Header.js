import React from 'react';
import styled from 'styled-components';
import { ButtonOutline, Heading, Small } from 'rebass';
import { Link, withRouter } from 'react-router-dom';

const Wrapper = styled.div`
  text-align: center;
  margin: 10px;
`;

const Tagline = styled.p`
  color: #e425e2;
`;

const Title = Heading.extend`
  color: #333;
`;

const RouteTitle = styled.h1`
  color: #333;
`;

const Header = _=>
  <Wrapper>
    <Title f={[5,5,6]}>
      <img src="styled-logs.png" alt="styled-logs logo" width={40} />
      &nbsp; styled-logs
    </Title>
    <Tagline>Styled console statements with CSS and modern JavaScript</Tagline>
    <Small> ~25 lines of JavaScript and 0 dependencies</Small>
    <br />
    <br />
    <ButtonOutline 
      is="a" 
      href="https://github.com/gojutin/styled-logs" 
      target="_blank"
      children="GitHub" 
    />	&nbsp;
    <Link to={ _.location.pathname === "/" ? "/code": "/"}>
      <ButtonOutline  
        children={ _.location.pathname === "/" ? "Annotated Source": "Interactive Demo"}
        style={{cursor: "pointer", width: 175 + "px"}}
      />
    </Link>
    <hr />
    <RouteTitle>
      {
        _.location.pathname === "/code"
        ? "Annotated Source Code"
        : "Interactive Demo"
      }
    </RouteTitle>
  </Wrapper>

export default withRouter(Header);