
export default `

  It goes to 11.

  1. The \`styled\` object is defined and will serve as the only export of the library.

  2. An \`exposedMethods\` array is created, which contains the name of each method of the global *console* objects that this library will expose.

  3. The \`exposedMethods\` array is mapped over using JavaScript's \`Array.map\` method. 
  A new property is created for each method name, which returns an anonymous function that takes two arguments:

     - \`strings\`- an array of all of the string values in the template literal seperated by expression. 
     - \`values\`- each expression included in the template literal in sequential order.

      These arguments are provided by the tagged template literal that is used to define the styles. 

  4. Each defined method returns the \`createStyledMethod\` function and provides two arguments:

      - \`methodName\` - This is the string from the \`exposedMethods\` array.
      - \`\`\${reconstruct(strings, values)}\`\` - A template literal that returns the \`resconstruct\` function and provides the array of strings and expressions that make up the user's input when invoking a styled log. The \`resconstruct\` function is defined and annotated below. 

  5. The \`createStyledMethod\` function is defined, which returns the \`init\` function, passing it the \`methodName\` and final \`style\` string that is constructed in the previous step. 

  6. The \`init\` function is defined, which serves as a closure to hold the initial set of arguments in memory for each instance that is created. The  \`init\` function returns the  \`executionFunction\` function, which will be the final function that is called each time a styled log is invoked. 

  7. The \`executionFunction\` function is responsible for invoking the global console method and passing all of the required arguments to display a styled console statement. This library exposes the four methods defined in the above \`exposedMethods\` array. Each of the global console methods are passed three arguments:
      - \`"%c%s"\` - A directive that you can pass to some of the global console methods that tells the method that a CSS style will be included as an argument along with the expression to be evaluated. The browser will attempt to style the console's output based on the declarations in the CSS string. This feature has several limitations. 

      - \`style\`- The \`style\` argument that is defined with a tagged template literal during the initial creation of a styled-logs method.

      - \`reconstruct(strings, values)\`- The input provided by the user when invoking a styled log method is reconstructed into a string, which will be the final output in the console.  

  8. An \`extend\` property is added to the \`executionFunction\` function, which can be invoked on each instance of a styled-logs method. It accepts the user's input in a tagged template literal and returns the \`createStyledMethod\` function. This function accepts the method name as the first argument, which is available thanks to the closure defined previously. The second argument uses the \`reconstruct\` utility function to combine the new style string with the original style for the method that the \`extend\` method is invoked on. A new styled-logs method is created with the combined styles. 
  
      A \`style\` property is also added to the newly created method, which returns the style string for the styled-logs method. This is just for convenience. 

  9. The \`executionFunction\` function is returned.

  10. The \`reconstruct\` utility function is defined and will be responsible for reconstructing strings from the arguments that are provided from a tagged template literal. This is accomplished by mapping over the strings and pushing each string and any sequential expression into a single array. 
  
      Logic is defined to prevent pushing any \`undefined\` expressions that would otherwise tag the keyword \`undefined\` onto the user's log statement.
  
      Additional logic is provided to check if any of the expressions are functions and invoking them if so. This allows the user to use expressions to dynamically pass values to the template literals when both defining styles and output values. 

      The final array is joined into a string using JavaScript's \`Array.join\` method and returned. 

  11. The final \`styled\` object is exported and ready to style some logs! 

`;
