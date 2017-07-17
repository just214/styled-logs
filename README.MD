<h1><img height=50 src="https://drive.google.com/uc?id=0B55pP6B9y0d9TWdONXhHY1E3NUk"/> 
styled-logs
</h1>

#### Styled console statements with CSS and modern JavaScript

~25 lines of JavaScript and 0 dependencies

inspired by  <a href="https://www.styled-components.com/" target="_blank"><img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height=75/></a>
 
 #### [Try the online demo!](http://styled-logs.surge.sh)
 
## table of contents

- [Getting Started](#get-started)
- [Basic Usage](#basic)
- [Advanced Usage](#advanced)
- [Limitations](#limitations)
- [Syntax Highlighting](#syntax)
- [Tagged Template Literals](#ttl)
- [Run the demo locally](#demo)

<h2 id="getting-started">Getting Started</h2>

```sh
yarn
$ yarn add styled-logs

npm five
$ npm install styled-logs

npm pre-five
$ npm install --save styled-logs
```


<h2 id="basic">Basic Usage</h2>

Simply create a styled-logs method and use it anywhere you would like.

```javascript
import styled from 'styled-logs';

// Create a new styled-logs method and style it with CSS using a tagged template literal
const log = styled.log`
  color: purple;
  font-size: 3em;
  background: slate;
  border: 2px solid yellow;
`;

// Now use your new styled-logs method
log`I am a styled log statement!`;

```

<h2 id="advanced">Advanced Usage</h2>

The `styled` object exposes four of the global console methods:

`log`, `warn`,  `error` and `info` 

The latter three methods provide icons and additional styling provided by the brower.

```javascript
const warn = styled.warn`
  color: orange;
  font-size: 3em;
  background: black;
  border: 1px solid yellow;
`;

const error = styled.error`
  color: red;
  font-size: 3em;
  background: black;
  border: 1px solid yellow;
`;

const info = styled.info`
  color: blue;
  font-size: 3em;
  border: 1px solid blue;
`;

info`I am an info message.`;
error`I am an error message.`;
warn`I am a warning message.`;
```

##### Extending Styles

You can extend from previously defined styled-logs methods using the `extend` method. If a particular style is redeclared, the latest declaration will be the applied style. 

```javascript
const log = styled.log`
	color: "purple";
`;

const extendedLog = log.extend`
	background: yellow;
    font-size: 2em;
`;

extendedLog`Check out my extended styles!`;
```

#### Misc.

As if the syntax above is not weird enough, you can also define a styled-logs method and use it at the same time.

This is roughly analogous to using the more common `function()()` syntax and is an example of function currying, which is made possible by JavaScript closures.

```javascript
styled.log`color: green;``I am a green console statement!`
```
##### Dynamic Styles

Adding dynamic styles and rendering logic to your styled-log methods is simple. You can include variables or expressions anywhere in your style declaration as long as it returns a properly formatted string. 

*This also applies to any console statements that are executed.*
```javascript
const show = true;
const bg = "orange";

const log = styled.log`
  color: green;
  background: ${show && bg};
`;
```

An expression can also return a function as long as the function returns a single value. 

```javascript
const log2 = styled.log`
  color: green;
  ${() => show && `background: yellow`};
`;

const log3 = styled.log`
  color: green;
  background: ${() => show && `purple`};
`;

```

<h2 id="limitations">Limitations</h2>
There is limited documentation on the tagging functionality that allows us to style the console's output. We have found that there are several limitations with the CSS but have bot extensively tested it. We will do our best to update this list as we make new discoveries.

**animations**

No luck on animations so far. If you get them to work, please do tell.

**syntax**

When defining your CSS styles, it's important to remember to use proper CSS syntax, which means finishing each declaration with a semicolon. This may not break your code in a simple situation, but you can definately expect to see issues when trying to extend styles or resolve expressions that are not formatted properly. There is currently no functionality in this library to attempt to correct any syntax errors.

```javascript
// this may not break despite the missing semicolon on the "color:blue" declaration.
const log = styled.log`color: blue`;

// but this will definetely break because additional styles will be added to the improperly formatted string.
const logWithBorder = styledLog.extend`border: 2px solid blue;`

```

<h2 id="syntax">Syntax Highlighting</h2>
The <a href="https://www.styled-components.com/" target="_blank"><img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height=50/></a> team has been hard at working on providing syntax highlighting in several different text editors. Find out more about what they are doing on the [styled-components GitHub page](https://github.com/styled-components/styled-components)

All of the syntax highlighters that they provide should work for **styled-logs** since we are also accepting CSS syntax via a template literal. 

 <h2 id="ttl">Tagged Template Literals</h2>
 
 If you have never invoked a function with a template literal, it may look a little strange. `log`, `warn` and `error` are all methods of the `styled` object, but we are invoking them using the template literal syntax:
 
 ```javascript
 styled.log`color: blue;`
 ```
 
Turns out, this is a completely valid way of executing a JavaScript function. We are _tagging_ the template literal with a function that is able to parse the string and any of its expressions (and variables). The tag function, when invoked with a template literal, will receive as arguments the template literal broken out into an array of strings along with all of its individual expressions and variables in sequential order. 
 
 Learn more about tagged template literals
 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals/" target="_blank">from MDN</a> or from <a href="https://www.styled-components.com/docs/advanced#tagged-template-literals" target="_blank">from styled-components</a>.


 <h2 id="demo">Run the demo locally</h2>

```sh
$ git clone git@github.com:gojutin/styled-logs.git
$ cd styled-logs/demo
$ yarn install (or npm install)
$ yarn start (or npm start)
```
Open your browser and visit `http://localhost:3000`


 <h2 id="disclaimer">Disclaimer (please read)</h2>
 
 <h4 style="color: red;">Not recommended for production use at this time. </h4>
 
 This library is brand new and has not been exhaustively tested. At this time, it in unknown which browsers support styled console statements, but they appear to work in newer versions of Chome and FireFox.
 
 Due to the limitations outlined above, results may vary. 
 
 ## Roadmap
 
 Below is a list of ideas and plans for future releases. 
 
- style various portions of a console statement individually in one method call
- possible integration with logging libraries like Morgan
- extensive list of supported styles and browsers
- more examples in the interactive demo
- tests

If you would like to contribute or have a comment / suggestion, I'd love to chat.


Made with <3 by a vegan. 