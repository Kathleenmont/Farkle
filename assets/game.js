const user1 = "Kathleen";

let dice = [];
let points = 0;
// variables that hold place in html
var rollInitial = document.getElementById("roll");
var pointsPrint = document.getElementById("points");
var RemainingDice = document.getElementById("remainingDice");// var wordText = document.getElementById("word");
// var guessesRemainingText = document.getElementById("guesses-remaining");
// var lettersGuessedText = document.getElementById("letters-guessed");
// var winsText = document.getElementById("wins");
// var lossesText = document.getElementById("losses");

const pointsCheck = (roll) => {
  console.log(roll);
//   print inital roll to screen
  rollInitial.innerHTML = (roll);
  ones = 0;
  fives = 0;
  sixes = 0;
  fours = 0;
  threes = 0;
  twos = 0;
  for (let i = 0; i < roll.length; i++) {
    if (roll[i] === 1) {
      ones += 1;
 
    } else if (roll[i] === 5) {
        fives += 1;

    } else if (roll[i] === 6) {
        sixes += 1;
     
    } else if (roll[i] === 4) {
        fours += 1;
    } else if (roll[i] === 3) {
        threes += 1;
    } else if (roll[i] === 2) {
        twos += 1;
    } 
    console.log(ones, "points in loop");
    console.log(roll, "roll here")
  }
  console.log(roll, "roll out loop")
  if (ones >= 3) {
    points += 1000;
    console.log(points);
    console.log(roll, "roll3")
    for (let i = 0; i < roll.length; i++) {
        if (roll[i] === 1) {
            roll.splice([i], 1)
            console.log([i], "splice 1")
          }
    }

  } else if (ones <= 2) {
    points += ones * 100;
    console.log(points);
    for (let i = 0; i < roll.length; i++) {
        if (roll[i] === 1) {
            roll.splice([i], 1)
            console.log([i], "splice 1")
          }
    }
  }

  if (fives >= 3) {
    points += 500;
    console.log(points);
    console.log(roll, "roll3")
    for (let i = 0; i < roll.length; i++) {
        if (roll[i] === 5) {
            roll.splice([i], 1)
            console.log([i], "splice 5")
          }
    }
  } else if (fives <= 2) {
    points += (fives * 50);
    console.log(points);
    for (let i = 0; i < roll.length; i++) {
        if (roll[i] === 5) {
            roll.splice([i], 1)
            console.log([i], "splice 5")
          }
    }
  }

  if (sixes >= 3) {
    points += 600;
    console.log(points);
    console.log(roll, "roll3")
    for (let i = 0; i < roll.length; i++) {
        if (roll[i] === 6) {
            roll.splice([i], 1)
            console.log([i], "splice 6")
          }
    }
  } 

  if (fours >= 3) {
    points += 400;
    console.log(points);
    console.log(roll, "roll3")
    for (let i = 0; i < roll.length; i++) {
        if (roll[i] === 4) {
            roll.splice([i], 1)
            console.log([i], "splice 4")
          }
    }
  } 

  if (threes >= 3) {
    points += 300;
    console.log(points);
    console.log(roll, "roll3")
    for (let i = 0; i < roll.length; i++) {
        if (roll[i] === 3) {
            roll.splice([i], 1)
            console.log([i], "splice 3")
          }
    }
  } 

  if (twos >= 3) {
    points += 200;
    console.log(points);
    console.log(roll, "roll3")
    for (let i = 0; i < roll.length; i++) {
        if (roll[i] === 2) {
            roll.splice([i], 1)
            console.log([i], "splice 2")
          }
    }
  } 
  pointsPrint.innerHTML = (points);
  RemainingDice.innerHTML = (roll);
  console.log(roll, "final roll")
};

const rollDice = (dice) => {
  dice = [3, 2, 4, 4, 6, 2];
  let roll = Array.from({ length: dice.length }, () =>
    Math.floor(Math.random() * 6 + 1)
  );
  console.log(dice);
  console.log(roll);
  pointsCheck(roll);
  return roll;
};

const startGame = () => {
  rollDice(dice);
};

startGame();
