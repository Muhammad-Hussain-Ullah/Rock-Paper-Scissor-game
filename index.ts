#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to a rock,paper,scissor game");
let choice = await inquirer.prompt([
  {
    name: "choice1",
    type: "list",
    choices:["Rock","Paper","Scissor"],
  },
  {
    name: "choice2",
    type: "list",
    choices:["Rock", "Paper", "Scissor"],
  },
]);
console.log(`User one picked ${choice.choice1}`)
console.log(`User two Picked ${choice.choice2}`)
let hello = function (choice1: string, choice2: string) {
  if (choice.choice1 === "Rock") {
    if (choice.choice2 === "Scissor") {
      console.log("Rock wins");
    } else if (choice.choice2 === "Rock") {
      console.log("Its a Tie");
    } else if (choice.choice2 === "Paper") {
      console.log("Paper wins");
    }
  } else if (choice.choice1 === "Paper") {
    if (choice.choice2 === "Rock") {
      console.log("Paper wins");
    } else if (choice.choice2 === "Paper") {
      console.log("Its a Tie");
    } else if (choice.choice2 === "Scissor") {
      console.log("Scissor win");
    }
  } else if (choice.choice1 === "Scissor") {
    if (choice.choice2 === "Rock") {
      console.log("Rock wins");
    } else if (choice.choice2 === "Paper") {
      console.log("Scissor win");
    } else if (choice.choice2 === "Scissor") {
      console.log("Its a tie");
    }
  }
};
hello(choice.choice1,choice.choice2)
