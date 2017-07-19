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


const selectOptions = [];
Object.keys(samples).forEach(key => selectOptions.push(key));
selectOptions.sort();

class Demo extends Component {
  state = {
    inputValue: "type anything here",
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
      copiedMessage: copy(code) ? "copied!" : "could not copy",
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
              <Select 
                style={{color: "#333"}}
                value={this.state.selectSample}
                onChange={e => this.setState({selectSample: e.target.value})} 
                >
                {
                  selectOptions.map(o => <option value={o} key={o}>{o}</option> )
                }
              </Select>
            </Box>
          </Flex>
          <h1 style={{color: "#e425e2", margin: 5}}>log`
          <Input 
            style={{width: 240 + "px", fontSize: 20 + "px", color: "#333"}} 
            onChange={e => this.setState({inputValue: e.target.value})}
            value={this.state.inputValue}
          />
          `</h1>
          <Small>Be sure to open the developer console to see the output.</Small>
          <br />
          <br />
          <ButtonOutline type="submit" children="log" style={{cursor: "pointer"}}/>
          <br />
        </form>
        <CopyButton onClick={() => this.copy(codeSample)}>
          <FaCopy /> &nbsp; { this.state.copiedMessage }
        </CopyButton>
        <CodeExample code={codeSample} copy={copy} />
      </div>
      );
    }
  }

export default withRouter(Demo);


