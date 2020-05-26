![Styled-Logs Icon](https://res.cloudinary.com/gojutin/image/upload/w_300/v1550798794/styled-logs-icon.png)

# styled-logs

### Styled console statements with modern JavaScript

[![npm version](https://badge.fury.io/js/styled-logs.svg)](https://badge.fury.io/js/styled-logs) ![npm](https://img.shields.io/npm/dt/styled-logs.svg) ![NPM](https://img.shields.io/npm/l/styled-logs.svg) ![npm bundle size](https://img.shields.io/bundlephobia/min/styled-logs.svg)

Zero dependencies

Written in TypeScript (types included)

Inspired by [styled-components](https://www.styled-components.com/)

Styled console statements are an experimental feature with limited browser support and even more limited documentation. Style rules do not always work as expected. Due to these limitations, results may vary. **Please use with caution.**

## Installation

`yarn add styled-logs` or `npm i styled-logs`

## Basic Example

```javascript
import styled from "styled-logs";

const Log = styled.log`
  color: purple;
  background: yellow;
`;

Log("I am a styled-log!");
```

## Usage

### Create your styled-log

This is done using a tagged templated literal to write your CSS styles.

```javascript
import styled from "styled-logs";

const Log = styled.log`
  color: purple;
  background: yellow;
  border: 2px solid purple;
  padding: 5px;
`;
```

The `styled` method exposes three of the global console methods as properties of the method:

`log`, `warn`, and `error`

```javascript
const ErrorLog = styled.error`
  color: tomato;
  font-weight: bold;
`;
```

The latter three methods provide icons and additional styling provided by the browser:

![Browser Console screenshot](https://res.cloudinary.com/gojutin/image/upload/v1550858634/styled-logs/console.png)

### Use your styled-log

This is done using a tagged templated literal to write your CSS styles.
The `styled` method exposes three of the global console methods as properties of the method:

```javascript
Log("🎉 Yay!");
```

You can optionally use a tagged template literal, which can be used to pass dynamic values.

```javascript
let name = "LIJS";
Log`Hello ${name}!`;

// This also works
Log(`Hello ${name}!`);
```

### Extend your styled-log

You can also create a styled-log by extending from the styles of a previously defined instance. You do this by passing a previously defined instance to the `styled` method as an argument followed by your new styles in a tagged template literal. The styles will be merged and in the event of a conflict, the latest style will always be applied.

```javascript
const Log = styled.log`
  color: "purple";
`;

const ExtendedLog = styled(Log)`
  background: yellow;
`;

// ExtendedLog will have purple text
// with a yellow background.
ExtendedLog("🎉 Yay...extended!");
```

### Creating Dynamic Styles

Adding dynamic styles is simple. You can include variables or expressions anywhere in your style declaration as long as they return a properly formatted string.

```javascript
const error = false;

const Log = styled.log`
  color: ${error ? "tomato" : "green"};
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
styled.log`
  color: green;
`("I am a green console statement!");
```

## Syntax

When defining your CSS styles, it's important to remember to use proper CSS syntax, which means finishing each declaration with a semicolon. This may not break your code in a simple situation, but you can definitely expect to see issues when trying to extend from styles or resolve expressions that are not formatted properly.

```javascript
// This may not break despite the missing
// semicolon on the "color:blue" declaration.

const FirstLog = styled.log`
  color: blue;
`;

// But, this will definitely break (silently).
const SecondLog = styled(FirstLog)`
  border: 2px solid blue;
`;
```

## Syntax Highlighting

Any syntax highlighting extension that works for [styled-components](https://www.styled-components.com/) should work for this library as well.

<h2 id="ttl">Tagged Template Literals</h2>

If you have never invoked a function with a template literal, it may look a little strange. `log`, `warn` and `error` are all methods of the `styled` object, but we are invoking them using the template literal syntax:

```javascript
styled.log`
  color: blue;
`;
```

Turns out, this is a completely valid way of executing a JavaScript function. We are _tagging_ the template literal (string) with a function that is able to parse the string and any of its expressions (and variables). The tag function, when invoked with a template literal, will receive as arguments the template literal broken out into an array of strings along with all of its individual expressions and variables in sequential order.

Learn more about tagged template literals from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals/) or [styled-components](https://www.styled-components.com/docs/advanced#tagged-template-literals).

Enjoy!
