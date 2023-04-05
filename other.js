"about nat";

let userPoints = 0;

alert("Welcome to my guessing game");

let user = prompt("what is your name?");

while (!user) {
  user = prompt("What is your name? Really, we need it");
}

// truthy and falsy

let x = null;

if (x) {
  console.log("Hey, I am truthy");
} else {
  console.log("It's falsy");
}
