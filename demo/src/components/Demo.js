import React, { Component } from 'react';
import styled from 'styled-components';
import { ButtonOutline, Input, Flex, Box, Select, Small } from 'rebass';
import CodeExample from './CodeExample';
import copy from 'copy-to-clipboard';
import * as samples from '../data/samples';
import FaCopy from 'react-icons/lib/fa/copy';
import { withRouter } from 'react-router-dom';
import PageTitle from './PageTitle';

const CopyButton = styled.span`
  cursor: pointer; 
  padding-left: 10px;
`;

const StyledInput = styled(Input)`
  width: 220px;
  font-size: 20px;
  color: #333;
`;

const StyledSelect = styled(Select)`
  width: 200px;
  font-size: 16px;
  color: #333;
`;

const StyledLogButtonOutline = styled(ButtonOutline)`
  line-height: 20px;
  width: 100px;
  cursor: pointer;
`;

const selectOptions = [];
Object.keys(samples).forEach(key => selectOptions.push(key));
selectOptions.sort();

class Demo extends Component {
  state = {
    inputValue: "say something",
    selectSample: "rainbow",
    copiedMessage: "",
  }

  log = (e) => {
    e.preventDefault();
    const {selectSample, inputValue } = this.state;
    console.clear();
    return samples[selectSample]`${inputValue}`;
  }

  setCopiedState = (message) => {
    this.setState({
      copiedMessage: message,
    })
  }

  copy = (code) => {
    this.setState({
      copiedMessage: copy(code) ? "copied!" : "could not copy :(",
    }, () => {
      window.setTimeout(() => {
        this.setState({
          copiedMessage: ""
        })
      }, 500)
    })
  }

  handleSelect = (e) => {
    console.log(e.target.value)
  }

  render() {

const codeSample = `
  import styled from 'styled-logs';

  const log = styled.log\`
      ${samples[this.state.selectSample].style}
  \`;

  log\`${this.state.inputValue}\`
`;
    
    return (
      <div>
        <form onSubmit={this.log} style={{textAlign: "center"}}>
          <PageTitle  title="Interactive Demo"/>
          <Flex justify="center">
            <Box width={[1/2, 1/4, 1/8]}>
              <Small>Choose a sample</Small>
              <StyledSelect 
                value={this.state.selectSample}
                onChange={e => this.setState({selectSample: e.target.value})} 
                >
                {
                  selectOptions.map(o => <option value={o} key={o}>{o}</option> )
                }
              </StyledSelect>
            </Box>
          </Flex>
          <h1 style={{color: "#e425e2", margin: 5 + "px"}}>log`
          <StyledInput
            onChange={e => this.setState({inputValue: e.target.value})}
            value={this.state.inputValue}
            placeholder="say something"
          />
          `</h1>
          <p>Open the developer console, hit the button below and see a styled console.log!</p>
          <br />
          <StyledLogButtonOutline type="submit" children="log"/>
          <br />
        </form>
        <CopyButton onClick={() => this.copy(codeSample)}>
          <FaCopy /> &nbsp; { this.state.copiedMessage }
        </CopyButton>

        <CodeExample code={codeSample} copy={copy} />
        <p 
          style={{textAlign: "center", color: "#333"}}
        >
          <b>Create and extend styled console methods. Make them dynamic with expressions. Learn how on &nbsp;</b>
          <a href="https://github.com/gojutin/styled-logs">GitHub</a>.
        </p>

        <h5 style={{textAlign: "center", color: "#333"}}>
          Big thanks to &nbsp;
          <small>
            <a href="http://lea.verou.me/css3patterns/" target="_blank" rel=" noopener noreferrer">
            http://lea.verou.me/css3patterns/
            </a>
          </small> 
          &nbsp; for the awesome collection of CSS patterns!
        </h5>
      </div>
      );
    }
  }

export default withRouter(Demo);


