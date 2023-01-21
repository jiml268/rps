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
      console.log(`user inputed:  ${userChoice}` )
    let userChoiceUpper = userChoice.toUpperCase();
    console.log(`uppercase user inputed:  ${userChoiceUpper}` )
    if (userChoiceUpper !== "R" && userChoiceUpper !== "P" && userChoiceUpper !== "S") {
      console.log('invalid letter')
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
  console.log(`computer picked:  ${computerChoice}` )
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
  console.log(`computer picked ${computerChoiceWord}` )

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
  console.log(`user picked word:  ${userChoiceWord}` )

  let winOption = " "
  let winner = " "
  // If choices are the same, it's a tie
  if (userChoiceUpper === computerChoice) {
    winner = "it is a tie"
    ties ++
  } else { 
    // Check every win condition for the player
    if ((userChoiceUpper === 'R' && computerChoice === "S") ||(userChoiceUpper === 'P' && computerChoice === "R") || (userChoiceUpper === 'S' && computerChoice === "P")) {
    winner = "You win";
    wins++
    winOption = userChoiceUpper;
  } else {
 // If above conditions failed, assume player lost
  winner = "I win";
  losses++
  winOption = computerChoice;
  }
}
console.log(`winoption ${winOption}`)
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
  let displayMessage = `${computerChoiceWord} \n ${userChoiceWord} \n ${switchMessage} \n ${winner}`;
  console.log(`pick & winner ${displayMessage}`)
displayStats(displayMessage)
}


function displayStats(displayMessage){
  // Print stats with line breaks`
  statMessage = `${displayMessage} \n Ties: ${ties} \n Wins: ${wins} \n Loses: ${losses}`;
  console.log(`winner & states ${statMessage}`)
  statMessage = statMessage + '\n Play again ?'
  console.log(`with play again ${statMessage}`) 
// Ask user to play again
const PlayAgain = confirm(`${statMessage}`);
// If user pressed OK, run the function again
  if (PlayAgain === false){
    return
  } else {
    console.log(`play again ${PlayAgain}`)
    playGame();
  }
}
// Run the game for the first time
console.log('bottom of page')
playGame();
