#!/usr/bin/env node
console.log(chalk.green.bold("\n\t\t\tWord Counter!\n\t\t"));
// Import the "inquirer" module, which is a command line interface for node.js
import inquirer from "inquirer";
import chalk from "chalk";
console.log("=".repeat(60));
//Declare a contant "answers" and assign it to  the result of inquirer.prompt function.
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.blue.bold("\nEnter your sentence to count the word:\n")
    }
]);
const words = answers.sentence.trim().split(" ");
//print the array of words to the console
console.log("=".repeat(60));
console.log(chalk.bold.bgMagenta("\t\nSentence Words count!!!!\t\n"));
console.log(words);
//print  the word count of the sentence to the console
console.log(chalk.yellow.bold(`\n\t\tyour sentence word count is ${words.length}\n\t\t`));
console.log("=".repeat(60));
