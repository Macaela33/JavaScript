//takes in two numbers, multiplies them, and returns the output
function getNum(n1,n2){
    total = n1*n2;
    return total;
};
let num = getNum(3,16);
console.log(num);

//recursive function
function taskChecklist(n){
    if (n===0){
        console.log("You completed all tasks.");
        return
    }
    console.log("I still have tasks to do.");
    taskChecklist(n-1);
}
taskChecklist(5);

//takes in a string and returns strings split in two
function splitString(str){
    const phrase = str.split(" ");
    console.log(phrase);
}
let phrase1 = splitString("Hello World");

//pass by value function
function holdValue(value){
    let value = 3;
    console.log(value);
}
let numb = 16;
console.log(numb);
holdValue(numb);
console.log(numb);

