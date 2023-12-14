//select the start button and modal overlay
//when user clicks start-btn add open-overlay to modal-overlay

const startBtn = document.querySelector(".start-btn");
const modalOne = document.querySelector(".modal-overlay");

startBtn.addEventListener("click", function () {
    modalOne.classList.add("open-overlay");
});