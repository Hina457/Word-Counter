#! /usr/bin/env node

//import the 'inquirer' which is a cammand line intertface.
import inquirer from "inquirer";

//Declare a constant 'answer' and assign it to the result of inquirer.prompt function.
console.log("Wel come to Hina alvi word counter project:")
const answers:{
    sentence:string 
} = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter your sentence to count the word:"
    }
])
const words = answers. sentence.trim().split(" ")

// print the array of words to the console.
console.log(words)

// print the word count of the sentence to the console.
console.log(`your sentence word count is ${words.length}`);
console.log("Thank you!")