import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const PageTitle = _=>
  <Title>
    { _.title}
  </Title>

PageTitle.propTypes = {
  title: PropTypes.string,
}

export default PageTitle;