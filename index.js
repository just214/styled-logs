let styled = {};

const exposedMethods = ["log", "warn", "error", "info"];

exposedMethods.map(methodName => styled[methodName] = (strings, ...values) => 
  createStyledMethod(methodName, `${reconstruct(strings, values)}`));

const createStyledMethod = (methodName, style) => init(methodName, style);

const init = (methodName, style) => {
  function executionFunction(strings, ...values) {
    console[methodName]("%c%s", style, reconstruct(strings, values));
  }
  executionFunction.extend = (strings, ...values) => 
    createStyledMethod(methodName, `${reconstruct(strings, values)} ${style}`)

  executionFunction.style = style;
  return executionFunction;
};

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

module.exports =  styled;

