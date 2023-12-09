# Classes and Inheritance

To view some examples, click [here](https://github.com/Macaela33/JavaScript/blob/3a355c01ad65e0fe20387af2fef5b274437471e3/Classes%26Inheritance/Objects.js)

## Objects

JavaScript supports objects. It is used to store various keyed collections and more complex entities.[[1]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) It is common practice to declare objects with the *const* keyword.[[2]](https://www.w3schools.com/js/js_objects.asp)

    const car = {type:"Toyota", model:"500", color:"white"}

### Functions [[3]](https://www.tutorialspoint.com/javascript/javascript_builtin_functions.html)
Javascript has a couple of standard methods for functions to that serve a similar purpose across objects. Some of these methods are: 
- toString(): Returns a string representing the specified object.
- valueOf(): Returns the number's value.
- fontcolor(): Causes a string to be displayed in the specified color as if it were in a <font color="color"> tag.

If you would like to see more methods, please view this [website](https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm).


## Inheritance

To create a class inheritance, you need to use the *extends* keyword. A class created with a class inheritance inherits all the methods from another class. [[4]](https://www.w3schools.com/js/js_class_inheritance.asp) Something to take note of is that JavaScript does not support multiple inheritance, but mixins can be implemented by copying methods. [[5]](https://javascript.info/mixins#:~:text=Some%20other%20languages%20allow%20multiple,as%20we%20have%20seen%20above.)

With inheritance, there is a possibility for function overloading. Function overloading is a feature of object-oriented programming where two or more functions can have the same name but different parameters. Unlike other programming languages, JavaScript does not support function overloading. Therefore, if JavaScript sees/parses two or more functions with the same name, it’ll just consider the last defined function and overwrite the previous ones. [[6]](https://www.geeksforgeeks.org/function-overloading-in-javascript/)

## Sources
[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

[2] https://www.w3schools.com/js/js_objects.asp

[3] https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm

[4] https://www.w3schools.com/js/js_class_inheritance.asp

[5] https://javascript.info/mixins#:~:text=Some%20other%20languages%20allow%20multiple,as%20we%20have%20seen%20above.

[6] https://www.geeksforgeeks.org/function-overloading-in-javascript/
