function reconstruct(literals: TemplateStringsArray | string, placeholders: any[]) {
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
  if (!Array.isArray(literals)) return literals;

  let result: string[] = [];
  literals.forEach((str, i) => {
    if (str) result.push(str);
    if (placeholders && placeholders[i])
    result.push(
        typeof placeholders[i] === "function" ? placeholders[i]() : placeholders[i]
      );
    return false;
  });
  return result.join(" ");
}

function init(methodName: string, style: string) {
  function executionFunction(literals: TemplateStringsArray | string, ...placeholders: any[]) {
    const text = reconstruct(literals, placeholders);
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

type StyledLog = (literals: TemplateStringsArray, ...placeholders: string[]) 
  => (methodName: string, style: string) 
  => (literals: TemplateStringsArray, ...placeholders: string[]) 
  => any;

interface Styled {
  log: StyledLog;
  warn: StyledLog;
  error: StyledLog;
}


 function styled<Styled>(previousStyle?: any) {
  if (previousStyle) {
    return (literals: TemplateStringsArray, ...placeholders: string[]) => {
      return init(
        previousStyle.methodName,
        `${previousStyle.style} ${reconstruct(literals,placeholders)}`
      );
    };
  }
  return false;
}


styled.log = (literals: TemplateStringsArray, ...placeholders: string[]) => {
  return init('log', `${reconstruct(literals, placeholders)}`);
};

styled.warn = (literals: TemplateStringsArray, ...placeholders: string[]) => {
  return init('log', `${reconstruct(literals, placeholders)}`);
};

styled.error = (literals: TemplateStringsArray, ...placeholders: string[]) => {
  return init('log', `${reconstruct(literals, placeholders)}`);
};

export { reconstruct, init }


export default styled;

