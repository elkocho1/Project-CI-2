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

//function to handle choice button click event
//Remove open-overlay class 
//modalOne.classList.remove("open-overlay");
//Display the score container
//scoreContainer.style.display = "block";
// Add event listener to each choice button
// For Loop with click event listener 
function handleChoiceButtonClick() {
    modalOne.classList.remove("open-overlay");
    scoreContainer.style.display = "block";
}

for (var i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener("click", function () {
        //call the function
        handleChoiceButtonClick();
    });
}