type MaybeString = string[] | string;
type MaybeStringArray = string[] | Function[] | any[] | undefined[];

function reconstruct(strings: MaybeString , values: MaybeStringArray) {
  /*
   * strings could be
   * 1. an array of strings
   * 2. a string
   *
   * values could be
   * - undefined
   * - an array of strings
   * - an array of functions (that return a string)
   * - an array of both strings and functions
   */

  // * If strings is of type string, values should be undefined.
  if (!Array.isArray(strings)) return strings;

  let messageArray: string[] = [];
  strings.forEach((str, i) => {
    if (str) messageArray.push(str);
    if (values && values[i])
      messageArray.push(
        typeof values[i] === "function" ? values[i]() : values[i]
      );
    return false;
  });
  return messageArray.join(" ");
}

function init(methodName: string, style: string) {
  function executionFunction(strings: MaybeString, ...values: MaybeStringArray) {
    const text = reconstruct(strings, values);
    console = console || window.console;
    switch(methodName) {
      case 'log':
      return console.log("%c%s", style, text);
      case 'info':
      return console.info("%c%s", style, text);
      case 'warn':
      return console.warn("%c%s", style, text);
      case 'error':
      return console.error("%c%s", style, text);
      default:
      return console.log("%c%s", style, text);
    }
  }
  executionFunction.style = style;
  executionFunction.methodName = methodName;
  return executionFunction;
}

let style: (previousStyle?: any) => 
  (strings: MaybeString, ...values: MaybeStringArray) => void
    // { log: string, warn: string, info: string,error: string}

 function styled (previousStyle?: any) {
  if (previousStyle) {
    return (strings: MaybeString, ...values: MaybeStringArray) => {
      return init(
        previousStyle.methodName,
        `${previousStyle.style} ${reconstruct(strings,values)}`
      );
    };
  }
}


styled.log = (strings: MaybeString , ...values: MaybeStringArray) => {
  return init('log', `${reconstruct(strings, values)}`);
};

styled.info = (strings: MaybeString , ...values: MaybeStringArray) => {
  return init('log', `${reconstruct(strings, values)}`);
};

styled.warn = (strings: MaybeString , ...values: MaybeStringArray) => {
  return init('log', `${reconstruct(strings, values)}`);
};

styled.error = (strings: MaybeString , ...values: MaybeStringArray) => {
  return init('log', `${reconstruct(strings, values)}`);
};


export default styled;

