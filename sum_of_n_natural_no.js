// SUM OF N NATURAL NUMBERS ENTERED BY USER

const prompt = require("prompt-sync")();
let num = Number(prompt("Enter the Number = "));
let sum = 0 ;
for (let i=0; i<num; i++)
{
    sum += (i+1);
}
console.log("Sum of first " + num + " natural number is = " + sum);