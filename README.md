# *Project JS - Rock, Paper, Scissors, Lizard, Spock Game*

Welcome to my JavaScript Rock, Paper, Scissors, Lizard and Spock game. This project allows the user to play the famous game from the TV series "The Big Bang Theory".  

The site can be accessed by this [link](https://elkocho1.github.io/Project-CI-2/).

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

### Colors

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


### Font Style

"Arial" (Arial, Helvetica, sans-serif) Font was used as the main font of the game to increase the readability of the content on the pages

---

## Bugs

### Dynamic image generator for the user and computer choices:

**The function showed sometimes a problem and could not generate/display the user choice with the image inside of the score container.**

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
    userChoiceSpan.innerHTML =
        `<img src="${userChoiceImagePath}" alt="${userChoice} hand choice user" class="choice-img"> 
        ${userChoice.toUpperCase()}`;
    //display the computer Choice with image after the click event in the score container
    const randomNumber = generateComputerChoice();
    let computerChoices = choices[randomNumber];
    let computerChoiceImagePath = getImagePathForChoice(computerChoices);
    console.log("computer choice:", computerChoices);
    computerChoiceSpan.innerHTML =
        `<img src="${computerChoiceImagePath}" alt="${computerChoices} hand choice computer" class="choice-img"> 
        ${computerChoices.toUpperCase()}`;}


```

### DeterminWinner Function Bug

**the function outputs every round the default value and doesn´t recognize the rules**

- In the first stage, I output the user and computer choices inside the function and everything was perfect. However, I saw that the output of the user was lowercase and of the computer capitalized. 
- Therefore, I put both choices to lowercase and changed the rule string to lowercase to get everything right.

```
function determineWinner(userChoice, computerChoices) {
    userChoice = userChoice.toLowerCase();


    if (userChoice === computerChoices) {
        return "It´s a tie!";
        //  console.log("tie");
    }
    if (userChoice === 'rock' && (computerChoices === 'scissors' || computerChoices === 'lizard')) {
        return "User wins!";
    } else if (userChoice === 'paper' && (computerChoices === 'rock' || computerChoices === 'spock')) {
        return "User wins!";
        //  console.log("User");
    } else if (userChoice === 'scissors' && (computerChoices === 'paper' || computerChoices === 'lizard')) {
        return "User wins!";
        //   console.log("User");
    } else if (userChoice === 'lizard' && (computerChoices === 'spock' || computerChoices === 'paper')) {
        return "User wins!";
        // console.log("User");
    } else if (userChoice === 'spock' && (computerChoices === 'scissors' || computerChoices === 'rock')) {
        return "User wins!";
        // console.log("User");
    }
    return "Computer wins!";
    // console.log("Computer");
}

function handleChoiceButtonClick(usersCurrentChoice) {
    //display user Choice with image after the click event in the score container
    let userChoice = usersCurrentChoice;
    console.log("user choice:", userChoice);
    const userChoiceImagePath = getImagePathForChoice(userChoice);
    userChoiceSpan.innerHTML =
        `<img src="${userChoiceImagePath}" alt="${userChoice} hand choice user" class="choice-img"> 
        ${userChoice.toUpperCase()}`;
    //display the computer Choice with image after the click event in the score container
    const randomNumber = generateComputerChoice();
    let computerChoices = choices[randomNumber];
    computerChoices = computerChoices.toLowerCase();
    let computerChoiceImagePath = getImagePathForChoice(computerChoices);
    console.log("computer choice:", computerChoices);
    computerChoiceSpan.innerHTML =
        `<img src="${computerChoiceImagePath}" alt="${computerChoices} hand choice computer" class="choice-img"> 
        ${computerChoices.toUpperCase()}`;
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


```



**Unsolved Bugs**

- None.

**Mistakes in Commit History**

- Mistakes were made while committing changes. 
- There was 1 mistake in the following commit: 

*a7e3d39* Instead of "get the innerText of the clicked choice button and display it in the score container" it should be "add the innerText of the choice button and display it in the scoring container"

---

## Testing

### Compatibility

- The game was tested on the following browsers: Chrome, Firefox, Edge, Brave

    - Chrome:
    ![Menu](documentation/menu-chrome.png)
    ![Pop-Up](documentation/pop-up-chrome.png)
    ![Score](documentation/score-container-chrome.png)
    ![Winner](documentation/winner-container-chrome.png)

    - Brave:
    ![Menu](documentation/menu-brave.png)
    ![Pop-Up](documentation/pop-up-brave.png)
    ![Score](documentation/score-container-brave.png)
    ![Winner](documentation/winner-container-brave.png)

    - Firefox:
    ![Menu](documentation/menu-firefox.png)
    ![Pop-Up](documentation/pop-up-firefox.png)
    ![Score](documentation/score-container-firefox.png)
    ![Winner](documentation/winner-container-firefox.png)

    - Edge:
    ![Menu](documentation/menu-edge.png)
    ![Pop-Up](documentation/pop-up-edge.png)
    ![Score](documentation/score-container-edge.png)
    ![Winner](documentation/winner-container-edge.png)

### Devtools testing

- The game was checked by Dev-Tools on Chrome and Firefox browsers.

### Responsiveness testing

- The game was tested with [Chrome-Extension-Webmobilfirst](https://www.webmobilefirst.com/es/).

1. Mobile Screen testing via [Loom-Video](https://www.loom.com/)
- Click the image to watch Loom video:
[![Video-Mobile](documentation/mobil-testing-responsive.png)](https://www.loom.com/share/f5ee0303d256421cb02876c61c6dfea3?sid=2920f3d1-58e9-4c36-8384-265cac1991f5)

2. Tablet Screen testing via [Loom-Video](https://www.loom.com/)
- Click the image to watch Loom video:
[![Video-Table](documentation/tablet-testing-responsive.png)](https://www.loom.com/share/9cd05306317d4f3c8c94a8a8a6a0fca7?sid=995f94dc-2196-48c3-aea8-3b864eaf6c8b)

3. Desktop Screen testing via [Loom-Video](https://www.loom.com/)
- Click the image to watch Loom video:
[![Video-Desktop](documentation/desktop-testing-responsive.png)](https://www.loom.com/share/65b579f3bb0245a39e8aa0438d9c33c7?sid=bfcbc5b6-8ee4-43fd-b07c-bb3b8ecf854c)

### Validator Testing

**HTML**

- No errors or warnings were found when passing through the official [W3C](https://validator.w3.org/) validator.
![HTML-Validator](documentation/html-validator-test.png)

**CSS**

- No errors or warnings were found when passing through the official [W3C](https://jigsaw.w3.org/) validator.
![CSS-Validator](documentation/css-validator-test.png)

**JS**

- No errors or warnings were found when passing through the official [JSHint](https://jshint.com/) validator, except 1 warning that you can see in the attached foto.

![JS-Validator](documentation/js-validator-test.png)

### Accessibility and Performance

- Using the [PageSpeed-Insights](https://pagespeed.web.dev/) I can confirm that the website is performing well and is accessible.
![Pagespeed](documentation/pagespeed-accessibility-test.png)


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

## Credits

### Content

- Design inspiration for the game comes from [Abdullah](https://github.com/abdullah43577/Rock-Paper-Scissors-Lizard-Spock-Game) who designed the game very well and inspired me with his logic and game structure.

### Media

- The images for the choices I downloaded from [PNGWING](https://www.pngwing.com/en/free-png-iiamd) for free.

---

## Acknowledgments

[Julia-Konovalova](https://github.com/IuliiaKonovalova) I am very thankful to my mentor Julia for her guidance and very valuable advice!

[John-Smilga](https://github.com/john-smilga/javascript-basic-projects) I am very happy to find those 29 JavaScript Projects due to these Projects I could understand JavaScript a lot more and got a practical point of view. 

[Bro-Code](https://www.youtube.com/watch?v=n1_vHArDBRA) With the help of this YouTube video I got a first impression of the Rock, Paper and Scissors game.
