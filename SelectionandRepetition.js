//a one-condition if/else statement
let greeting = prompt("Hello, how are you? "); 
if (greeting === null){
    console.log("How rude, no response?");
} else{
    console.log("Thank you for letting me know.");
}

//multi-condition if/else statement
let age = 21
let birthYear = 2002

if (age >= 21 && birthYear <= 2002){
    console.log("It's okay to drink."); //will return 'It's okay to drink.'
}else{
    console.log("You are not allowed to drink");
}

// if/elif/else statements
let season = prompt("Tell me your favorite season: "); //based off of the input will return one of the statement answers
if (season == "spring"){
    console.log("You choose the best season!");
} else if (season === "summer"){
    console.log("How can you enjoy that heat?");
} else if (season === "winter"){
    console.log("You must enjoy frostbite.");}
    else {
        console.log("That season is wack.")
    }

//switch-case statement
const color = "Blue";
switch(color){ //runs through every case until one is met
    case "Yellow":
        console.log("The yellow shirt will be too small for you.");
        break;
    case "Blue":
        console.log("The blue shirt will be too big for you.");//returns 'The blue shirt will be too big for you'
        break;
    default:
        console.log("We have every size you need.");
}

//short circuit logic
let a = 5
let b = 90

if (a < 25 || b < 25){
    console.log(true); //returns true
}else{
    console.log(false);
}