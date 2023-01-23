let wins = 0;
let ties = 0;
let losses = 0;
let statMessage = "";

// Array of options for computer to pick from
const options = ["R", "P", "S"];

const playGame = function() {
  // Ask user for their choice
  const userChoice = window.prompt('Enter R, P, or S:');
  // If user pressed Cancel, immediately end function
 
  if (userChoice === null) {
    return
  } else { 
      // Convert to uppercase to make comparisons easier
    let userChoiceUpper = userChoice.toUpperCase();
    if (userChoiceUpper !== "R" && userChoiceUpper !== "P" && userChoiceUpper !== "S") {
      playGame();
      
} else {
      checkWinner(userChoiceUpper);
       
}
  }
}


function checkWinner(userChoiceUpper) {

    // Get random index from array of options
  const ranNumber = Math.floor(Math.random() * 3); 
  const options = ["R", "P", "S"];
  let computerChoice = options[ranNumber]
  // Show computer's choice
  let computerChoiceWord=" "
  if (computerChoice === "R") {
  computerChoiceWord = 'I choose Rock';}
    else {
      if (computerChoice === "P") {
      computerChoiceWord = 'I choose paper';  
    } else {
      computerChoiceWord = 'I choose Scissors';
    }
  }

  let userChoiceWord = " "
  if (userChoiceUpper === "R") {
    userChoiceWord = 'You choose Rock';}
    else {
      if (userChoiceUpper === "P") {
      userChoiceWord = 'You choose paper';  
    } else {
      userChoiceWord = 'You choose Scissors';
    }
  }

  let winOption = " "
  let winner = " "
  let displayEmoji=" "
  // If choices are the same, it's a tie
  if (userChoiceUpper === computerChoice) {
    winner = "it is a tie"
    ties ++
  } else { 
    // Check every win condition for the player
    if ((userChoiceUpper === 'R' && computerChoice === "S") ||(userChoiceUpper === 'P' && computerChoice === "R") || (userChoiceUpper === 'S' && computerChoice === "P")) {
    winner = "You win";
    displayEmoji = `😃`
    wins++
    winOption = userChoiceUpper;
  } else {
 // If above conditions failed, assume player lost
  winner = "I win";
  displayEmoji = `😞`
  losses++
  winOption = computerChoice;
  }
}
switch (winOption) {
  case "R":
    switchMessage = "Rock crushes Scissors";
    break;
    case "P":
    switchMessage = "paper covers Rock";
    break;
    case "S":
    switchMessage = "Scissors cut paper";
    break;

    default:
      switchMessage = "Nobody Wins "
}
  let displayMessage = `${computerChoiceWord} \n ${userChoiceWord} \n ${switchMessage}  \n ${winner} ${displayEmoji}`;
displayStats(displayMessage)
}


function displayStats(displayMessage){
  // Print stats with line breaks`
  statMessage = `${displayMessage} \n Ties: ${ties} \n Wins: ${wins} \n Loses: ${losses}`;
  statMessage = statMessage + '\n Play again ?'
// Ask user to play again
const PlayAgain = confirm(`${statMessage}`);
// If user pressed OK, run the function again
  if (PlayAgain === false){
    return
  } else {
    playGame();
  }
}
// Run the game for the first time
playGame();
