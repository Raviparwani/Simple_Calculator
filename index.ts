import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "Enter first number",
    type: "number",
     name: "firstNumber"},
{message: "Enter secound number",
type: "number",
name: "secoundNumber"},

{message:"select one of the operations to perform opration",
type: "list",
name: "operator",
choices:["Addition","Subtraction","Multipilication","Division"], }
]);

if(answer.operator==="Addition"){
console.log("Your value is",answer.firstNumber + answer.secoundNumber);
}else if(answer.operator==="Subtraction"){
    console.log("Your value is",answer.firstNumber - answer.secoundNumber);
    }else if(answer.operator==="Multipilication"){
        console.log("Your value is",answer.firstNumber * answer.secoundNumber);
        }else if(answer.operator==="Division"){
            console.log("Your value is",answer.firstNumber / answer.secoundNumber);
            } else { console.log("Please Select Valid Operator")}
//console.log(answer);