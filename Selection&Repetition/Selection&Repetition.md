# Selection and Repetition

To view more examples click [here](https://github.com/Macaela33/JavaScript/blob/8650d8b61626553e0182941f9f8c32948cb6f02c/Selection%26Repetition/SelectionandRepetition.js)

## Conditional Statements

JavaScript has two types of conditional statements. if/else and if/elseif/else statements. These statements are used in JavaScript to help it execute specific actions, provided certain conditions are met. Below is a example of an if/elseif/else statement:

    x = 9
    
    if (x > 9){
      console.log("Greater than 9!);
      
    }else if (x == 9){
      console.log("Equals 9!);
      
    }else {
      console.log("Something else");
    }
Writing conditional statements can sometimes cause a "dangling else" problem. The dangling else problem results when a programmer loses track of the if statement that goes with the else statement. [[1]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

    function letter (x,y){
    if (x == 3) 
    
      if (y == 16)
        console.log("x is 3 and y is 16");
        
    else
      console.log("x is not 3");}
This will log "x is not 3" because of the dangling else problem. The else clause would connect to the closest if clause. For it to run properly you need to add block statements. 

    function letter(x, y) {
      if (x == 3) {
        if (y == 16) {
          console.log("x is 3 and y is 16");
        }
      }else {
          console.log("x is not 3");
        }
      }
It is best practice to use block statements, especially when using nested if statements. A block statement is used to group zero or more statements. The block is determined by a pair of curly brakets and contains a list of zero or more statements and declarations.[[2]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block#) 

## Switch Statements
JavaScript supports switch statements and needs break statements for it to run. When JavaScript reaches a break keyword, it breaks out of the switch block. This will help stop the execution inside the switch block. A 'continue' statement can only be used within loop statements. (This is an error that showed in VS code when I tried to include 'continue' in the switch statement.) [[3]](https://www.w3schools.com/js/js_switch.asp)

    const color = "Blue";
    switch(color){
        case "Yellow":
            console.log("The yellow shirt will be too small for you.");
            break;
        case "Blue":
            console.log("The blue shirt will be too big for you.");
            break;
        default:
            console.log("We have every size you need.");
    }

## Short-Circuit Evaluations
Short-circuiting is the evaluation of an expression from left to right with || (or) and && (and) operators. Using these operators results in true or false (all lowercase) boolean values. [[4]](https://www.educative.io/answers/what-are-javascript-short-circuiting-operators#)

    console.log(true && false) //this returns false once it gets its first false value
    console.log(true || false) //this returns true once it gets its first truth value

## Repetition
In JavaScript, Repetition statements are used to repeadetly execute a block of  code as long as the condition is true. The most common statements are while and for loops. 

for loop:
```
for (let step = 0; step < 5; step++) {     // Runs 5 times, with values of step 0 through 4.
    console.log("Walking east one step");
}
```
while loop:
```
while (i < 10) {     //the code in the loop will run, over and over again, as long as a variable (i) is less than 10
  text += "The number is " + i;
  i++;     //increases the number by 1
}
```

**To learn more about JavaScript classes and inheritance, click [here](https://github.com/Macaela33/JavaScript/blob/bc427f1a346b20c675601139e44b184f77f5295a/Classes%26Inheritance/Classes%26Inheritance.md)**

## Sources
[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

[2] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block#

[3] https://www.w3schools.com/js/js_switch.asp        

[4] https://www.educative.io/answers/what-are-javascript-short-circuiting-operators#
