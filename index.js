// using switch

function calculateGradeSwitch(score) {
  if (isNaN(score)) {
    console.log("Not a Number X");
    return;
  }

  const grade = Math.floor(score / 10);

  switch (grade) {
    case 10:
      console.log("Perfect Score");
      break;
    case 9:
    case 8:
      console.log("You got an A");
      break;
    case 7:
      console.log("You got a B");
      break;
    case 6:
      console.log("You got a C");
      break;
    case 5:
      console.log("You got a D");
      break;
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      console.log("You got an F");
      break;
    default:
      console.log("Invalid Score X");
  }
}

// Example usage:
const score = 92;
calculateGradeSwitch(score);

// using if conditions

function calculateGradeIf(scoree) {
  if (isNaN(scoree)) {
    console.log("Not a Number X");
  } else if (scoree === 100) {
    console.log("Perfect Score");
  } else if (scoree >= 85 && scoree <= 100) {
    console.log("You got an A");
  } else if (scoree >= 75 && scoree < 85) {
    console.log("You got a B");
  } else if (scoree >= 65 && scoree < 75) {
    console.log("You got a C");
  } else if (scoree >= 50 && scoree < 65) {
    console.log("You got a D");
  } else if (scoree >= 0 && scoree < 50) {
    console.log("You got an F");
  } else {
    console.log("Invalid Score X");
  }
}

// Example usage:
const scoree = 92;
calculateGradeIf(scoree);
