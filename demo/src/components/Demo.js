import React, { Component } from 'react';
import { ButtonOutline, Input, Flex, Box, Select, Small } from 'rebass';
import CodeExample from './CodeExample';
import copy from 'copy-to-clipboard';
import * as samples from '../samples';
import FaCopy from 'react-icons/lib/fa/copy';


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
            style={{width: 280 + "px", fontSize: 20 + "px", color: "#333"}} 
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
        <span onClick={() => this.copy(codeSample)} style={{cursor: "pointer", paddingLeft: 10 + "px"}}>
          <FaCopy /> &nbsp; { this.state.copiedMessage }
        </span>
        <CodeExample code={codeSample} copy={copy} />
      </div>
      );
    }
  }

export default Demo;


