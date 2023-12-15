//select the start button and modal overlay
//when user clicks start-btn add open-overlay to modal-overlay

const startBtn = document.querySelector(".start-btn");
const modalOne = document.querySelector(".modal-overlay");
const choiceButtons = document.querySelectorAll(".btn-choices button");
const scoreContainer = document.querySelector(".score-container");

const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
const userChoiceSpan = document.getElementById("user-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const winnerSpan = document.getElementById("winner");

const userScoreSpan = document.getElementById("score-user");
const computerScoreSpan = document.getElementById("score-computer");

const roundSpan = document.getElementById("rounds-container");
const nextBtn = document.getElementById("next-round");

let userScore = 0;
let computerScore = 0;

let roundNumber = 0;
const roundMax = 3;

startBtn.addEventListener("click", function () {
    nextBtn.style.display = "block";
    startBtn.style.display = "none";
    displayGamePopUp();
    updateRound();
});
nextBtn.addEventListener("click", function () {
    //   modalOne.classList.add("open-overlay");
    displayGamePopUp();
    updateRound();
});

//test logs
//console.log("Choices array:", choices);
//console.log("User Choice Span:", userChoiceSpan);
//console.log("Computer Choice Span:", computerChoiceSpan);

//Function to generate a random number for the computer´s choice
function generateComputerChoice() {
    return Math.floor(Math.random() * choices.length);
}
//test the function console.log(generateComputerChoice());

// Funtion Game Rules to determin the winner
// If statements what hand beats the 2 hands
//2 PLayers userChoice and ComputerChoices


function determineWinner(userChoice, computerChoices) {
    if (userChoice === computerChoices) {
        return "It´s a tie!";
        //  console.log("tie");
    }
    if (userChoice === 'Rock' && (computerChoices === 'Scissors' || computerChoices === 'Lizard')) {
        return "User wins!";

    } else if (userChoice === 'Paper' && (computerChoices === 'Rock' || computerChoices === 'Spock')) {
        return "User wins!";
        //  console.log("User");
    } else if (userChoice === 'Scissors' && (computerChoices === 'Paper' || computerChoices === 'Lizard')) {
        return "User wins!";
        //   console.log("User");
    } else if (userChoice === 'Lizard' && (computerChoices === 'Spock' || computerChoices === 'Paper')) {
        return "User wins!";
        // console.log("User");
    } else if (userChoice === 'Spock' && (computerChoices === 'Scissors' || computerChoices === 'Rock')) {
        return "User wins!";
        // console.log("User");
    }
    return "Computer wins!";
    // console.log("Computer");

}



//function to update scores
function updateScores(winner) {
    if (winner === "User wins!") {
        userScore++;
    } else if (winner === "Computer wins!") {
        computerScore++;
    }
    //display user score & computer score
    userScoreSpan.innerText = userScore;
    computerScoreSpan.innerText = computerScore;

}

//function to update round
function updateRound() {
    roundNumber++;
    roundSpan.innerText = roundNumber;
}

const displayGamePopUp = function () {
    modalOne.classList.add("open-overlay");
    for (var i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].addEventListener("click", function (event) {
            //call the function when any choice button is clicked
            handleChoiceButtonClick(event);
        });
    }

}





/**
 * function to handle choice button click event
 * Remove open-overlay class 
 * modalOne.classList.remove("open-overlay");
 * Display the score container
 * scoreContainer.style.display = "block";
 * Add event listener to each choice button
 * For Loop with click event listener 
 */

function handleChoiceButtonClick(event) {

    //get the innerText of the clicked users choice
    //add event paramenter to main function and loop 
    //create variable userChoice and add the event.target.innerText
    const userChoice = event.target.innerText;
    //console.log("userChoice");
    //display the new variable 
    userChoiceSpan.innerText = userChoice;
    //get computer´s choice by random number 
    const randomNumber = generateComputerChoice();
    const computerChoices = choices[randomNumber];
    //console.log("computerChoices");
    //display in score container
    computerChoiceSpan.innerText = computerChoices;

    // call the determin winner function
    const winner = determineWinner(userChoice, computerChoices);
    // console.log("winner of the round:", winner);
    //display winner in span element
    winnerSpan.innerText = winner;

    //display score and call the function;
    updateScores(winner);

    if (roundNumber === roundMax) {
        nextBtn.style.display = "none";
        startBtn.style.display = "block";
    }


    //display values with innerText

    //Remove "open-overlay" class to hide the pop up
    modalOne.classList.remove("open-overlay");
    //Display the score button
    scoreContainer.style.display = "block";
}