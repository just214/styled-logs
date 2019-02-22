![Styled-Logs Icon](https://res.cloudinary.com/gojutin/image/upload/w_300/v1550798794/styled-logs-icon.png)

# styled-logs

### Styled console.logs with modern JavaScript

~Tiny library with 0 dependencies

Heavily inspired by [styled-components](https://www.styled-components.com/)

#### [Try the interactive demo!](https://styled-logs.com)



Styled console statements are an experimental feature with limited browser support and even more limited documentation. Style rules do not always work as expected. Due to these limitations, results may vary. **Please use with caution.**

 
## Installation
`yarn add styled-logs` or `npm i styled-logs`


## Basic Usage
Simply create a **styled log** and use it anywhere you would like.

```javascript

import styled from 'styled-logs';

// Create a new styled-logs method 
// and style it with CSS using a tagged template literal

const Log = styled.log`
  color: purple;
  font-size: 3em;
  background: yellow;
  border: 2px solid purple;
  padding: 5px;
`;

// Now use your new styled-logs method

Log('🎉 Yay!');

```
The `styled` method exposes four of the global console methods as properties of the method:

`log`, `warn`, `error` and `info`

``` javascript
const ErrorLog = styled.error`
  color: tomato;
  font-weight: bold;
`;
```

The latter three methods provide icons and additional styling provided by the browser:

![Styled-Logs Icon](https://res.cloudinary.com/gojutin/image/upload/v1550801477/console-screenshot.png)


## Extending From Styles
You can also create a styled-log by extending from the styles of a previously defined instance. You do this by passing a previously defined instance to the `styled` method as an argument followed by your new styles in a tagged template literal. The styles will be merged and in the event of a conflict, the latest style will always be applied.

```javascript
const Log = styled.log`
  color: "purple";
`;

const ExtendedLog  = styled(Log)`
  background: yellow;
`;

// ExtendedLog will have purple text 
// with a yellow background.
ExtendedLog('🎉 Yay...extended!')
```

## Dynamic Styles
Adding dynamic styles is simple. You can include variables or expressions anywhere in your style declaration as long as they return a properly formatted string.

```javascript
const error = false;

const Log = styled.log`
  color: ${error ? 'tomato' : 'green'};
`;

const Log2 = styled.log`
  color: green;
  ${() => show && `background: yellow`};
`;

const log3 = styled.log`
  color: green;
  background: ${() => show && `purple`};
`;
```

## Misc.

As if the syntax above is not weird enough, you can also define and execute a styled-logs method in a one-liner.

```javascript
styled.log`color: green;`('I am a green console statement!')
```
  

## Syntax

When defining your CSS styles, it's important to remember to use proper CSS syntax, which means finishing each declaration with a semicolon. This may not break your code in a simple situation, but you can definitely expect to see issues when trying to extend from styles or resolve expressions that are not formatted properly. 

```javascript
// This may not break despite the missing 
// semicolon on the "color:blue" declaration.

const FirstLog = styled.log`color: blue`;

// But, this will definitely break (silently).
const  SecondLog = styled(FirstLog)`
  border: 2px solid blue;
`;
```

<h2 id="syntax">Syntax Highlighting</h2>

Any syntax highlighting extension that works for [styled-components](https://www.styled-components.com/) should work for this library as well.

<h2 id="ttl">Tagged Template Literals</h2>

If you have never invoked a function with a template literal, it may look a little strange. `log`, `warn` and `error` are all methods of the `styled` object, but we are invoking them using the template literal syntax:

```javascript
styled.log`color: blue;`
```

Turns out, this is a completely valid way of executing a JavaScript function. We are _tagging_ the template literal (string) with a function that is able to parse the string and any of its expressions (and variables). The tag function, when invoked with a template literal, will receive as arguments the template literal broken out into an array of strings along with all of its individual expressions and variables in sequential order.

Learn more about tagged template literals

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals/"  target="_blank">from MDN</a> or from <a href="https://www.styled-components.com/docs/advanced#tagged-template-literals"  target="_blank">from styled-components</a>.

 
<h2 id="demo">Run the demo locally</h2>

 
```sh

$ git clone git@github.com:gojutin/styled-logs.git

$ cd styled-logs/demo

$ yarn install (or npm install)

$ yarn start (or npm start)

```

Open your browser and visit `http://localhost:3000`
