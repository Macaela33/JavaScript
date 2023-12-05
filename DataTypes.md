## JavaScript

JavaScript is a dynamic type language where the interpreter assigns variables a data type based on the variables value at the time.[[1]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#) It is also a weakly typed language that allows implicit type conversions. It notices when an operation includes mismatched data types, but would allow it to run instead of stating an error has occurred. Being a weakly typed language with implicit type conversions allows mixed type conversions.[[2]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#) (fix)

## Variables

To declare a variable you need to use **var, let, const** to declare your variable. **var** creates variables that can be redeclared and its valued can be reassigned. However, var isn't commonly used any more so developers should use let or const. **let** declares variables that can't be redeclared, but its value can be reassigned. Finally, there is **const** that declares variables with values that can not be reassigned another value. [[3]](https://www.w3schools.com/js/js_variables.asp)

JavaScript has a list of 64 words that are reserved in its language. You can not use these words as variables, labels, or function names. Some of the words included on this list are: boolean, debugger, char, int, public, static, and more. If you would like the full list, please visit [w3schools](https://www.w3schools.com/js/js_reserved.asp).

To begin naming variables in JavaScript, you have to keep some things in mind. 

- You may not use any reserved words.
- Variables should be written in camelCase. camelCase is a method that allows you to separate words in a phrase by making the first letter of each word capitalize, helping you to not use spaces.   
- Names can contain letters, digits, underscores, and dollar signs.
- Names should begin with a letter and can also begin with $ and _ .
- Names are case sensitive (y and Y are different variables).

JavaScript is not extremely strict with these naming conventions. There isn't anything enforcing these rules, but it is something respected by the JavaScript community. If you dont follow these guidelines to the fullest extent JavaScript will not panic. [[4]](https://www.w3schools.com/js/js_conventions.asp)

## Coding Example
JavaScript most common data types are strings, numbers, biginit, boolean, undefined, null, symbol, [[5]](https://www.w3schools.com/js/js_datatypes.asp). Unlike many other programming languages, you do not need to define variables as specific types, JavaScriot decide the variable type on its own. In the coding example attached I have provided examples of common data types in the programming world, such as int, string, boolean, floating point number, arrays.

Operators for data types [[6]](https://www.w3schools.com/js/js_operators.asp):

- Arithmetic operators: addition(+), subtraction(-), multiplication(*), exponentiation(**), division(/), modulus(%), increment(++), decrement(--)
- Assignment operators: =, +=, -=, *=, **=, /=, %=,  which does the arithmetic to a variable.
- Comparison operators: ==, !=, >, <, <=, >=, ?

Most of these operators are mainly used for numbers, strings, and sometimes boolean data types.

### Things to keep in mind about data types
- JavaScript numbers are always stored as double precision floating point numbers.
- If you add a number and a string or two strings, the result will be connected instead of added. 
- JavaScript will typically try to convert strings to numbers in all numeric operations except with the addition operator.
- JavaScript evaluates expressions from left to right, which is how the result is produced.
- You can store different data type in array such as strings and numbers.
- JavaScript will try to convert strings to numbers in all numeric operations except the addition operator.


Primitive data types, which are are all the data types in JavaScript, are immutable. If a variable is one of these data types you can't change the value after creating them, but that you can still access. [[7]](https://www.freecodecamp.org/news/mutability-vs-immutability-in-javascript/#whatisimmutabilityinjavascript)

https://github.com/Macaela33/JavaScript/blob/5a8a93690ec81cb5d84450e66b11495165aeb341/Functions.md
## Sources
[1]https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing

[2]https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#

[3]https://www.w3schools.com/js/js_variables.asp

[4]https://www.w3schools.com/js/js_conventions.asp

[5]https://www.w3schools.com/js/js_datatypes.asp

[6]https://www.w3schools.com/js/js_operators.asp

[7]https://www.freecodecamp.org/news/mutability-vs-immutability-in-javascript/#whatisimmutabilityinjavascript
