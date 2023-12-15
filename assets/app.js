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
//function to handle choice button click event
//Remove open-overlay class 
//modalOne.classList.remove("open-overlay");
//Display the score container
//scoreContainer.style.display = "block";
// Add event listener to each choice button
// For Loop with click event listener 
function handleChoiceButtonClick() {


    //Remove "open-overlay" class to hide the pop up
    modalOne.classList.remove("open-overlay");
    //Display the score button
    scoreContainer.style.display = "block";
}

for (var i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener("click", function () {
        //call the function when any choice button is clicked
        handleChoiceButtonClick();
    });
}