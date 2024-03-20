#! /usr/bin/env node 
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Enter first number",
    type: "number",
    name: "firstNumber",
  },
  {
    message: "Enter second number",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "Select operation",
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Percentage",
    ],
  },
]);

if (answer.operator === "Addition") {
  console.log("Your value is", answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log("Your value is", answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log("Your value is", answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log("Your value is", answer.firstNumber / answer.secondNumber);
} else if (answer.operator === "Percentage") {
  console.log(
    "Your value is",
    (answer.firstNumber * answer.secondNumber) / 100
  );
} else {
  console.log("Please Select Valid Operator");
}
