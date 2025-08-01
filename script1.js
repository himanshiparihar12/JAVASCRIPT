//DEMONSTRATE THE USE OF SWITCH CASE STATEMENT IN JAVASCRIPT

const prompt = require("prompt-sync")();  

let age = Number(prompt("Enter the age = ")); 
switch(age)
{
    case 12:
        console.log("your age is 12...");
    case 13:
        console.log("your age is 13...");
    case 14:
        console.log("your age is 14...");
    case 15:
        console.log("your age is 15...");
    case 16:
        console.log("your age is 16...");
    case 17:
        console.log("your age is 17...");
        break;
    default:
        console.log("Your age is not special.....");
}