# Functions

## Declaring a Function
There are no rules about where a function needs to be placed for the file to be run. The function needs to be declared and written correctly for it to run. 
A JavaScript function is declared with the **function** keyword, the name you would like to use for the function, followed by parenthesis and brackets.

Function Example:

    function addNum (n1, n2){
      total = n1 + n2
      console.log(total)
    }

Something to keep in mind:

When writing a function, you have to remember that multiple multiple values can not be returned from a function in JavaScript. However, you can store values in an array or object and have it return the values that way.

### Variables
The variables that are declared within a JavaScript function, become local to the function. This creates a function scope where they can only be accessed within the function. Since it is only recognized within, you are allowed to use variables with the same name in other functions. These local variables are created when a function starts, and deleted when the function is completed.[[1]](https://www.w3schools.com/js/js_scope.asp)

## Scope
JavaScript does not have too much rules revolving scoped. The main rule is that blocks only scope let and const declarations, but not var declarations.

## Parameters and Arguments
Function parameters are the names listed in the function definition. Function arguments are the real values passed to (and received by) the function.

### Arguments [[2]](https://www.w3schools.com/js/js_function_parameters.asp)
JavaScript arguments are passed by value. The function only gets to know the values, not the argument location. If a function changes an argument's value, it does not change the parameter's original value. Any changes to arguments are not reflected outside of the function.

### Parameters [[2]](https://www.w3schools.com/js/js_function_parameters.asp)
If a function is called with less than declared parameters, an error would not occur, the missing parameters will be set as undefined. Sometimes this is acceptable, but it is better to assign a default value to each parameter.

### Function Arguments and Parameters Notes [[3]](https://www.w3schools.com/js/js_function_parameters.asp)
- JavaScript function parameters do not need its parameters to be specified by data type because it will not perform type checking on passed arguments.
- JavaScript functions do not check the number of arguments received, allowing there to be no restrictions. 

## Function Side Effects [[4]](https://javascript.plainenglish.io/how-to-avoid-side-effects-using-pure-functions-in-javascript-366acaafb60c)
When we modify something in JavaScript it'll cause a side effect. A side effect occurs when you modify or change your code, causing it to have unpredictable behavior and mutability. To stop this you need to create pure functions. Pure functions are functions that return the same output no matter the input it is being given without causing any side effects. You should also try to mainly use local variables. This will prevent variables from outside the code block from running. 

## Recursive Functions [[5]](https://www.freecodecamp.org/news/recursion-in-javascript/)
A recursive function is a function that calls itself somewhere within the body of the function. It will repeat calling itself until the desired output is achieved. JavaScript will support this type of function. If you would like to see and example look at the attached code in the respository. 

**To learn about selection and repeatition statements, click [here](https://github.com/Macaela33/JavaScript/blob/b3712a8806b6674b6744d9e2159da59430187b6a/Selection%26Repetition/Selection%26Repetition.md)**

## Sources
[1] https://www.w3schools.com/js/js_scope.asp

[2] https://www.w3schools.com/js/js_function_parameters.asp

[3] https://www.w3schools.com/js/js_function_parameters.asp

[4] https://javascript.plainenglish.io/how-to-avoid-side-effects-using-pure-functions-in-javascript-366acaafb60c

[5] https://www.freecodecamp.org/news/recursion-in-javascript/

