//assigning data types

let age = 18;
console.log(age);

const $me = 'Macaela Stanislas';
console.log($me);

let m = 3.14;
console.log(m);

console.log(Boolean(10>9));
console.log(10 < 9);

const sampleUni = ['SimmonsU', 'HamptonU', 'UBuffalo', 'UAlbany'];
console.log(sampleUni);

//using different data types with operations

let x = 20;
let y = '23';
let z = x + y; 
console.log(z);//the result will be 2023
//If you add a number and a string the result will be connected instead of added. The same thing will happen if you add two strings together.

let a = '23';
let b = '20';
let c = a - b; //the result will be 3
console.log(c);
//JavaScript will try to convert strings to numbers in all numeric operations except the addition operator

let d = 100 / 'Mac'; 
console.log(d)//will result in NaN (Not a number)

const person = ['Mac', 'Stan', 20]; 
console.log(person); //if array is printed you will get Mac,Stan,20

let f = 16 + 3 + 'Numbers'; 
console.log(f); //result is 19Numbers
// JavaScript evaluates expressions from left to right and thats how the result is determined
