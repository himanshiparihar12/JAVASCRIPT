//WRITE A JAVASCRIPT PROGRAM TO FIND WHETHER A NUMBER IS DIVISIBLE BY 2 AND 3 

const prompt = require("prompt-sync")();
let num = Number(prompt("Enter the Number = "));  
if(num%2==0 && num%3==0)
{
    console.log("Entered number is divisible by 2 and 3");
}
else
{
    console.log("Entered Number is not divisible by 2 and 3")
}