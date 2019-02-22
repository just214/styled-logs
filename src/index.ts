// const { reconstruct, init } = require("./utils");
const { reconstruct, init } = require('./utils');

type MaybeString = string[] | string;
type MaybeStringArray = string[] | Function[] | any[] | undefined[];

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

