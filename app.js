let userPoints = 0;

let parachute = prompt(
  "Had I flew a parachute, have a guess? (Please answer either yes/no or y/n )"
);
if (parachute.toLowerCase() === "yes" || parachute.toLowerCase() === "y") {
  userPoints++;
  alert("You're correct I had flew a parachute!!");
} else {
  alert("That's right, I can't fly parachute;)!");
}

let food = prompt(
  "Had I climbed a mountain, have a guess? (Please answer either yes/no or y/n )"
);
if (food.toLowerCase() === "yes" || food.toLowerCase() === "y") {
  userPoints++;
  alert("You're not correct I didn't climb a mountain!!");
} else {
  alert("you are not correct, I had not climb mountain yet");
}

let pet = prompt(
  "Do I have ' pug pet', have a guess? (Please answer either yes/no or y/n )"
);
if (pet.toLowerCase() === "yes" || pet.toLowerCase() === "y") {
  userPoints++;
  alert("You're correct I don't have a pug pet!!");
} else {
  alert("you are not correct, I don't have a dog)!");
}

let travel = prompt(
  "Had I been to antarctida, have a guess? (Please answer either yes/no or y/n )"
);
if (travel.toLowerCase() === "yes" || travel.toLowerCase() === "y") {
  userPoints++;
  alert("You're correct I had been to antarctida!!");
} else {
  alert("you are not correct, I had not been to antarctida)!");
}

let hockey = prompt(
  "Had I been playing ice hockey, have a guess? (Please answer either yes/no or y/n )"
);
if (hockey.toLowerCase() === "yes" || hockey.toLowerCase() === "y") {
  userPoints++;
  alert("You're correct I had been to antarctida!!");
} else {
  alert("you are not correct, I had not been to antarctida)!");
}

let number = prompt("How old is John travolta, have a guess?");
for (let i = 3; i >= 0; i--) {
  if (i === 0) {
    alert("to many attempts");
    break;
  }
  if (number > 69) {
    number = prompt("Your guess is too high");
  } else if (number < 69) {
    number = prompt("your guess is too low");
  } else if (number === "69") {
    alert("you are correct");
    break;
  }
}

function guessQuiz() {
  let guess = prompt("Which is my favourite comedy, from my top 5?");
  for (let i = 3; i >= 0; i--) {
    if (i === 0) {
      alert("to many attempts");
      break;
    }
    if (number > 5) {
      number = prompt("Your guess is too high");
    } else if (number < 5) {
      number = prompt("your guess is too low");
    } else if (number === "5") {
      alert("you are correct");
      break;
    }
  }
}
guessQuiz();

function questionOne() {
  console.log("Function One Executed");
}

function questionTwo() {
  console.log("Function Two Executed");
}

function TakeQuiz() {
  questionOne();
  questionTwo();
}
