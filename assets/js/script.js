/* jshint esversion:6 */

/**
 * Global Variants
 */

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

const finalContainer = document.querySelector(".final-container");
const resultSpan = document.getElementById("result");
const totalScoresUserSpan = document.getElementById("total-scores-user");
const totalScoresComputerSpan = document.getElementById("total-scores-computer");

scoreContainer.style.display = "none";

/**
 * Start/Replay button function and click event
 */

startBtn.addEventListener("click", function () {
    document.getElementById("intro-msg").style.display = "none";
    document.getElementById("round-msg").style.display = "block";
    //check if a new game should be started or next round
    if (roundNumber === roundMax || roundNumber === 0) {
        startNewGame();
    } else {
        //continue the current game
        nextBtn.style.display = "block";
        startBtn.style.display = "none";
        displayGamePopUp();
        updateRound();
    }
});

/**
 * Next Round Button Function
 */
nextBtn.addEventListener("click", function () {
    document.getElementById("round-msg").style.display = "block";
    //modalOne.classList.add("open-overlay");
    displayGamePopUp();
    updateRound();
});


/**
 * Function to generate a random number for the computer´s choice
 */
function generateComputerChoice() {
    return Math.floor(Math.random() * choices.length);
}


/** 
 * Funtion Game Rules to determin the winner
 * If statements what hand beats the 2 hands
 * 2 PLayers userChoice and ComputerChoices
 */
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


/**
 * Function to update game scores 
 */
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


/**
 * Function to update round
 */
function updateRound() {
    roundSpan.innerText = roundNumber;
}


/**
 * For loop for each choice button 
 */
for (let i = 0; i < choiceButtons.length; i++) {
    console.log(choiceButtons[i]);
    choiceButtons[i].addEventListener("click", function (event) {
        //call the function when any choice button is clicked
        console.log("choice button clicked");
        console.log(choiceButtons[i].dataset.choice);
        console.log(choiceButtons[i]);
        handleChoiceButtonClick(choiceButtons[i].dataset.choice);
    });
}


/**
 * Display the Pop Up with the choices
 */
const displayGamePopUp = function () {
    modalOne.classList.add("open-overlay");
};


/**
 * Determin the overall winner and update the result 
 */
function handleEndOfGame() {
    console.log("handleEndOfGame called"); // test why the scoreContainer gets still displayed after the third round 
    if (userScore > computerScore) {
        resultSpan.innerText = "User Win!";
    } else if (computerScore > userScore) {
        resultSpan.innerText = "Computer Win!";
    } else {
        resultSpan.innerText = "It's a Tie! ";
    }
    //Update the total scores
    totalScoresUserSpan.innerText = userScore;
    totalScoresComputerSpan.innerText = computerScore;
    //hide score ontainer and show final container
    scoreContainer.style.display = "none";
    finalContainer.style.display = "block";
}


/**
 * Function to reset the scores and rounds
 */
function replayGame() {
    userScore = 0;
    computerScore = 0;
    roundNumber = 0;
    userScoreSpan.innerText = userScore;
    computerScoreSpan.innerText = computerScore;
    roundSpan.innerText = roundNumber;
    finalContainer.style.display = "none";
    scoreContainer.style.display = "none";
}


/**
 * Function to start a new game
 */
function startNewGame() {
    replayGame();
    nextBtn.style.display = "block";
    startBtn.style.display = "none";
    displayGamePopUp();
}


/**
 * Assign the image Path the the choices
 */
function getImagePathForChoice(choice) {
    console.log(choice);
    let imagePath = '';
    switch (choice.toLowerCase()) {
        case 'rock':
            imagePath = 'assets/images/rock-preview.png';
            break;
        case 'paper':
            imagePath = 'assets/images/paper-preview.png';
            break;
        case 'scissors':
            imagePath = 'assets/images/scissors-preview.png';
            break;
        case 'lizard':
            imagePath = 'assets/images/lizard-preview.png';
            break;
        case 'spock':
            imagePath = 'assets/images/spock-preview.png';
            break;
        default:
            imagePath = 'assets/images/default.jpg';
    }
    return imagePath;
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

function handleChoiceButtonClick(usersCurrentChoice) {
    //display user Choice with image after the click event in the score container
    let userChoice = usersCurrentChoice;
    console.log("user choice:", userChoice);
    const userChoiceImagePath = getImagePathForChoice(userChoice);
    userChoiceSpan.innerHTML = `<img src="${userChoiceImagePath}" alt="${userChoice}" class="choice-img"> ${userChoice.toUpperCase()}`;
    //display the computer Choice with image after the click event in the score container
    const randomNumber = generateComputerChoice();
    let computerChoices = choices[randomNumber];
    let computerChoiceImagePath = getImagePathForChoice(computerChoices);
    console.log("computer choice:", computerChoices);
    computerChoiceSpan.innerHTML = `<img src="${computerChoiceImagePath}" alt="${computerChoices}" class="choice-img"> ${computerChoices.toUpperCase()}`;
    //display the winner in the score container
    const winner = determineWinner(userChoice, computerChoices);
    winnerSpan.innerText = winner;
    //call the updateRound function and increase it
    roundNumber++;
    updateRound();
    //call the updateScores function
    updateScores(winner);

    if (roundNumber === roundMax) {
        nextBtn.style.display = "none";
        startBtn.style.display = "block";
        handleEndOfGame();
    }
    scoreContainer.style.display = "block";
    modalOne.classList.remove("open-overlay");
}