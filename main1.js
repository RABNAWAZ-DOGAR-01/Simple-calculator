import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    { message: "Enter the first number:", type: "number", name: "firstnumber" },
    { message: "Enter the second number:", type: "number", name: "Secondnumber" },
    {
        message: "select the one opreters for opration",
        type: "list",
        name: "Opraters",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Increment"],
    },
]);
console.log(asnwer);
if (asnwer.Opraters === "Addition") {
    console.log("Total value:", +asnwer.firstnumber + asnwer.Secondnumber);
}
else if (asnwer.Opraters === "Subtraction") {
    console.log("Total value:", +asnwer.firstnumber - asnwer.Secondnumber);
}
else if (asnwer.Opraters === "Multiplication") {
    console.log("Total value:", +asnwer.firstnumber * asnwer.Secondnumber);
}
else if (asnwer.Opraters === "Division") {
    console.log("Total value:", +asnwer.firstnumber / asnwer.Secondnumber);
}
