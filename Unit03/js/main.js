document.querySelector("header > h1").innerText = "Guessing Game";
document.querySelector("header > h2").innerText = "Loops";

// pick a random number between 0 and 16

const correctNumber = Math.floor(Math.random() * 15);

let guessed = false;
let totalGuesses = 0;
let gamerGuess = 0;

console.log(`the random number is ${correctNumber}`);

function evalGuess() {
  totalGuesses += 1; //totalGuesses = totalGuesses +1
  gamerGuess = document.querySelector("#guess").value;

  console.log(totalGuesses, gamerGuess);

  const feedback = document.querySelector("#feedback");

  if (gamerGuess == correctNumber) {
    feedback.innerText = "You Win!";
    giveAward(); //way of calling a function, this will run if user guessed correctly
  } else if (gamerGuess > correctNumber && gamerGuess < 16) {
    feedback.innerText = "too high, try again";
  } else if (gamerGuess < correctNumber && gamerGuess > 0) {
    feedback.innerText = "too low, try again";
  } else {
    feedback.innerText = "Choose a number between 1 and 15. Try again";
    totalGuesses -= 1;
  }

  document.querySelector("#attempts").innerText = totalGuesses;
}

function giveAward() {
  console.log("Congratulations!");

  switch (totalGuesses) {
    case 1:
    case 2:
    case 3:
        console.log('You've received a Blue Ribbon!)
        break;
        case 4:
  }
}
