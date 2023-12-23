# *Project JS - Rock, Paper, Scissors, Lizard, Spock Game*

Welcome to my JavaScript Rock, Paper, Scissors, Lizard and Spock game. This project allows the user to play the famous game from the TV series "The Big Bang Theory".  

the site can be accessed by this [link](https://elkocho1.github.io/Project-CI-2/)

![Responsive Mockup](documentation/responsive_mock_up.png)

---

## User Stories

### First Time Visitor Goals:

- As a first-time visitor, I want to easily understand the main purpose of the game, so I can play it directly.
- As a first-time visitor, I want to easily navigate through the game, so I can find the content.
- As a first-time visitor, I want to have fun playing the game.

### Returning Visitor Goals:

- As a returning visitor, I want to play as many rounds as possible.
- As a returning visitor, I want to start the game fast with view clicks.

### Frequent Visitor Goals:

- As a frequent user, I want to have constant access to the game, so I can play it during my free time.
- As a frequent user, I want to play the game on mobile, so I can play it from anywhere.

## Features

### Menu Page

- Represent:
    - The main goal of the game.
    - Emphasize the easiness of using the game.
    - Provides the rules to play.
    - Menu Page has 1 H1 title, an introduction message to explain the game and 1 button to start the game.

![Menu](documentation/menu_slider.png)

---

### Pop Up Page

- Inside the Pop Up we have a clear introduction for playing the game.
- In total, the user has to play 3 rounds to win or lose the game.
- There are 5 buttons with an image of the hand the user can choose his hand.
- After clicking one of the choices the Pop Up will be closed and the user can see the winner of the round

![Pop-Up](documentation/pop_up.png)

---

### Score Page

- On the score page, we can see the current round count, the user scores and the computer scores.
- It displays the user´s hand choice and the computer´s hand choice.
- It displays the winner of the round or if it is a tie.
- It displays a button to play the next round.

![Score](documentation/score_round_container.png)

---

### Winner Page

- It displays with the third round under the third score container.
- It displays a thank you message.
- It displays the winner of the game and the scores each player scored during the game.

![Winner](documentation/winner_container.png)

---

## Flowchart

The flowchart represents the approach to this game and the first logic but during the development, the author added several functions and logic.

![Flowchart](documentation/flowchart_gamelogic.png)

---

## Technologies Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) was used as the foundation of the site.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/css) was used to add the styles and layout of the site.
- [CSS-Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) was used to arrange items symmetrically on the pages.
- [CSS-Roots](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) was used to declare global CSS variables and apply them throughout the project.
- [JS](https://www.w3schools.com/js/) was used to add interactivity to the site.
- [VS-Code](https://code.visualstudio.com/) was used as the main tool to write and edit code.
- [Git](https://git-scm.com/) was used for the version control of the website.
- [GitHub](https://github.com/) was used to host the code of the website.
- [Canva](https://www.canva.com/) was used to make and resize images for the project and readme files.

---

## Design

![Main-Background](documentation/main-background.png)
dark linear blue gradient was used to reduce visual pressure.

![Main-Text-Color](documentation/main-text-color.png)
white was used to increase the contrast to the dark background color.

![Button-Background](documentation/button-background.png)
orange background was used to increase the contrast to the dark background color.

![Button-Hover](documentation/button-hover-background.png)
a dark orange background was used to give the user an insight into the cursor position.

![Pop-Up-Background](documentation/popup-background.png)
white linear gradient color was used to reduce the visual pressure.

![Second-Text-Color](documentation/second-text-color.png)
black color was used to increase the contrast to the dark background color.

---

## Bugs

### Dynamic image generator for the user and computer choices:

**The function showed sometimes a problem and could not generate/display the user choice with the image.**

- In the first step, I changed the variables of the "userChoice", "computerChoices" and the for loop for the "choiceButtons" from "const" to "let".
- In the second step, I added a dataset to the 5 choice buttons and called it in the for loop.
- Last but not least, I changed the parameter for the function from "event" to "usersCurrentChoice" of the "handleChoiceButtonClick" function.

Solution HTML Code Snipped
```
<div class="btn-choices">
    <button id="rock" data-choice="rock"><img src="assets/images/rock-preview.png" alt="rock hand choice">Rock</button>
    <button id="paper" data-choice="paper"><img src="assets/images/paper-preview.png" alt="paper hand choice">Paper</button>
    <button id="scissors" data-choice="scissors"><img src="assets/images/scissors-preview.png" alt="scissors hand choice">Scissors</button>
    <button id="lizard" data-choice="lizard"><img src="assets/images/lizard-preview.png" alt="lizard hand choice">Lizard</button>
    <button id="spock" data-choice="spock"><img src="assets/images/spock-preview.png" alt="spock hand choice">Spock</button>
</div>

```

Solution JavaScript Code Snipped
```

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
    computerChoiceSpan.innerHTML = `<img src="${computerChoiceImagePath}" alt="${computerChoices}" class="choice-img"> ${computerChoices.toUpperCase()}`;}


```

**Unsolved Bugs**

- None.

**Mistakes in Commit History**

- Mistakes were made while committing changes. 
- There was 1 mistake in the following commit: 

*a7e3d39* Instead of "get the innerText of the clicked choice button and display it in the score container" it should be "add the innerText of the choice button and display it in the scoring container"

---

## Testing

here comes the testing

---

## Deployment

- The site was deployed to the GitHub pages. The steps to deploy are as follows:
    - In the [GitHub-Repository](https://github.com/elkocho1/Project-CI-2.git), navigate to the settings tag
    - From the source section drop-down menu, select the **Main** Branch, then click Save.
    - The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://elkocho1.github.io/Project-CI-2/)

---

## Local Deployment

To make a local copy of this project, you can clone it. 
In your IDE Terminal, type the following command to clone my repository: 

- git clone https://github.com/elkocho1/Project-CI-2.git

---




