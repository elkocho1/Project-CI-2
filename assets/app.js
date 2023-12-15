//select the start button and modal overlay
//when user clicks start-btn add open-overlay to modal-overlay

const startBtn = document.querySelector(".start-btn");
const modalOne = document.querySelector(".modal-overlay");

startBtn.addEventListener("click", function () {
    modalOne.classList.add("open-overlay");
});

// select the button choices and score container
// when one button is click the pop up closes and the score container is displayed

const choiceButtons = document.querySelectorAll(".btn-choices button");
const scoreContainer = document.querySelector(".score-container");
// create a variable with the array, 
// get the Id´s user-choice and computer-choice to display each
// Get the innerText of the Choice Button
const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
const userChoiceSpan = document.getElementById("user-choice");
const computerChoiceSpan = document.getElementById("computer-choice");

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

// select winner span id element
const winnerSpan = document.getElementById("winner");

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



//select the score od for the computer and user to display the result
//set the inital value to 0
const userScoreSpan = document.getElementById("score-user");
const computerScoreSpan = document.getElementById("score-computer");
//function to update scores


//function to handle choice button click event
//Remove open-overlay class 
//modalOne.classList.remove("open-overlay");
//Display the score container
//scoreContainer.style.display = "block";
// Add event listener to each choice button
// For Loop with click event listener 
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

    //Remove "open-overlay" class to hide the pop up
    modalOne.classList.remove("open-overlay");
    //Display the score button
    scoreContainer.style.display = "block";
}

for (var i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener("click", function (event) {
        //call the function when any choice button is clicked
        handleChoiceButtonClick(event);
    });
}