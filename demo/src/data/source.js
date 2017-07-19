export default  `
// 1
let styled = {};



// 2
const exposedMethods = ["log", "warn", "error", "info"];



// 3
exposedMethods.map(methodName => styled[methodName] = (strings, ...values) => 
  // 4
  createStyledMethod(methodName, \`\${reconstruct(strings, values)}\`));



// 5
const createStyledMethod = (methodName, style) => init(methodName, style);



// 6
const init = (methodName, style) => {



  // 7
  function executionFunction(strings, ...values) {
    console[methodName]("%c%s", style, reconstruct(strings, values));
  }



  // 8
  executionFunction.extend = (strings, ...values) => 
    createStyledMethod(methodName, \`\${reconstruct(strings, values)} \${style}\`)

  executionFunction.style = style;



  // 9
  return executionFunction;
};



// 10
const reconstruct = (strings, values) => {
  let messageArray = [];
  strings.map((str, i) => {
    if (str) messageArray.push(str);
    if (values[i]) messageArray.push(
      typeof(values[i]) === "function" ? values[i]() : values[i]
    )
    return false;
  })
  return messageArray.join("");
};



// 11
module.exports =  styled;



`;
