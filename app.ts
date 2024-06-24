import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter 1st number", type: "number", name: "firstnumber" },
  { message: "Enter 2nd number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
console.log(answer);

// conditional statements
if (answer.operator === "Addition") {
  console.log(+answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "Subtraction") {
  console.log(+answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "Multiplication") {
  console.log(+answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "Division") {
  console.log(+answer.firstnumber / answer.secondnumber);
} else {
  console.log("Please select valid operator");
}