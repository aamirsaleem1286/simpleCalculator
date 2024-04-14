#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "firstNumber",
        message: chalk.redBright("Enter the first number: ")
    }, {
        type: "number",
        name: "secondNumber",
        message: chalk.redBright("Enter the second number: ")
    }, {
        type: "list",
        name: "operator",
        message: chalk.yellowBright("Choose an operator: "),
        choices: ["+", "-", "*", "/"]
    }
]);
const { firstNumber, secondNumber, operator } = answers;
let result;
switch (operator) {
    case "+":
        result = firstNumber + secondNumber;
        break;
    case "-":
        result = firstNumber - secondNumber;
        break;
    case "*":
        result = firstNumber * secondNumber;
        break;
    case "/":
        result = firstNumber / secondNumber;
        break;
    default:
        console.log(chalk.red("Invalid operator"));
        break;
}
console.log(chalk.green(`Result of ${firstNumber} ${operator} ${secondNumber} = ${result}`));
