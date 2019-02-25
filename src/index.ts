type StyledLog = (literals: TemplateStringsArray, ...placeholders: string[]) => Function;
type Reconstruct = (literals: TemplateStringsArray | string,  placeholders: string[] ) => string;
type Init = (methodName: string, style: string) => ExecutionFunction;

interface Styled  {
  (previousStyle?: any): any;
  log: StyledLog;
  warn: StyledLog;
  error: StyledLog;
}

interface ExecutionFunction {
  (literals: TemplateStringsArray | string, ...placeholders: any[]): any;
  style: string;
  methodName: string;
}

const reconstruct: Reconstruct = (literals: TemplateStringsArray | string, placeholders: any[]): string => {
  if (typeof literals === 'string') {
    return literals;
  }
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


const init: Init = (methodName: string, style: string): ExecutionFunction => {
  const executionFunction: ExecutionFunction = Object.assign(
    (literals: TemplateStringsArray | string, ...placeholders: any[]): void => {
      const text = reconstruct(literals, placeholders);
      let Console: any = console || window.console;
      Console[methodName]("%c%s", style, text);
    },
    {
      style,
      methodName
    }
  );
  return executionFunction;
};

const styled: Styled = Object.assign(
  (previousStyle?: any) => {
    if (previousStyle) {
      return (literals: TemplateStringsArray, ...placeholders: string[]) => {
        return init(
          previousStyle.methodName,
          `${previousStyle.style} ${reconstruct(literals, placeholders)}`
        );
      };
    }
  },
  {
    log: (literals: TemplateStringsArray, ...placeholders: string[]): Init => {
      return init("log", `${reconstruct(literals, placeholders)}`);
    },
    warn: (literals: TemplateStringsArray, ...placeholders: string[]): Init => {
      return init("warn", `${reconstruct(literals, placeholders)}`);
    },
    error: (literals: TemplateStringsArray, ...placeholders: string[]): Init => {
      return init("error", `${reconstruct(literals, placeholders)}`);
    }
  },
);

export default styled;