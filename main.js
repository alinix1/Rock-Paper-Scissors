
// QUERY SELECTORS

var classicGameButton = document.getElementById('classicGameButton');
var difficultGameButton = document.getElementById('difficultGameButton');
var changeGameButton = document.getElementById('changeGameButton');
var classicFightersOption = document.getElementById('classicFightersOption');
var difficultFightersOption = document.getElementById('difficultFightersOption');
var classicRockImage = document.getElementById('classicRockImage');
var classicPaperImage = document.getElementById('classicPaperImage');
var classicScissorsImage = document.getElementById('classicScissorsImage');
var difficultRockImage = document.getElementById('difficultRockImage');
var difficultPaperImage = document.getElementById('difficultPaperImage');
var difficultScissorsImage = document.getElementById('difficultScissorsImage');
var difficultLizardImage = document.getElementById('difficultLizardImage');
var difficultSpockImage = document.getElementById('difficultSpockImage');
var humanWin = document.getElementById('winCountHuman');
var computerWin = document.getElementById('winCountComputer');
var mainHeaderText = document.getElementById('mainText');
var subHeaderText = document.getElementById('subText');

// GLOBAL VARIABLES

var game;
var human = new Player('human');
var computer = new Player('computer');
var fighterOptions = [classicRockImage, classicPaperImage, classicScissorsImage, difficultRockImage, difficultPaperImage, difficultScissorsImage, difficultLizardImage, difficultSpockImage];

// EVENT LISTENERS

classicGameButton.addEventListener('click', switchToClassicView);
difficultGameButton.addEventListener('click', switchToDifficultView);
changeGameButton.addEventListener('click', changeGameOption);
classicRockImage.addEventListener('click', () => {
  startClassicGame('rock');
});
classicPaperImage.addEventListener('click', () => {
  startClassicGame('paper');
});
classicScissorsImage.addEventListener('click', () => {
  startClassicGame('scissors');
});
difficultRockImage.addEventListener('click', () => {
  startDifficultGame('rock');
});
difficultPaperImage.addEventListener('click', () => {
  startDifficultGame('paper');
});
difficultScissorsImage.addEventListener('click', () => {
  startDifficultGame('scissors');
});
difficultLizardImage.addEventListener('click', () => {
  startDifficultGame('lizard');
});
difficultSpockImage.addEventListener('click', () => {
  startDifficultGame('spock');
});

// fighterOption.addEventListener('click', );
// mainHeaderText.addEventListener('click', );

// FUNCTIONS AND EVENT HANDLERS

function switchToClassicView() {
  startGameView();
  game = new Game(human, computer);
  classicFightersOption.classList.remove('hidden');
  difficultFightersOption.classList.add('hidden');
  game.isClassicGameType;
  showClassicOptions();
};

function switchToDifficultView() {
  startGameView();
  game = new Game(human, computer);
  difficultFightersOption.classList.remove('hidden');
  classicFightersOption.classList.add('hidden');
  game.isClassicGameType;
  showDifficultOptions();
};

function startGameView() {
  toggleViews(difficultGameButton);
  toggleViews(classicGameButton);
  subHeaderText.innerText = 'Choose your fighter!';
};

function showChosenFighters() {
  var humanPlayer = game.human.token;
  var computerPlayer = game.computer.token;
  for (var i = 0; i < fighterOptions.length; i++) {
    if (humanPlayer === fighterOptions[i].dataset.icon) {
      humanPlayerImg.src = `${fighterOptions[i].src}`
    }
    if (computerPlayer === fighterOptions[i].dataset.icon) {
      computerPlayerImg.src = `${fighterOptions[i].src}`
    }
  }
  chosenPlayers.classList.remove('hidden');
};

function showDifficultOptions() {
  for (const element of fighterOptions) {
    element.classList.remove('hidden');
  }
};

function showClassicOptions() {
  for (const element of fighterOptions) {
    element.classList.remove('hidden');
  }
};

function hideGameOptions() {
  for (const element of fighterOptions) {
    element.classList.add('hidden');
  }
};

function toggleViews(element) {
  if (element.matches('hidden')) {
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
};

function randomClassicChoice() {
  var classicChoices = ['rock', 'paper', 'scissors'];
  var randomClassic = Math.floor(Math.random() * classicChoices.length);
  return classicChoices[randomClassic];
};

function randomDifficultChoice() {
  var difficultChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  var randomDifficult = Math.floor(Math.random() * difficultChoices.length);
  return difficultChoices[randomDifficult];
};

function updateWins(whoWonElement, whoWonPlayer) {
  whoWonElement.innerText = whoWonPlayer.wins;
};

function startClassicGame(choice) {
  game.computer.token = randomClassicChoice();
  if (event.target.id === 'classicRockImage') {
    game.human.token = 'rock';
  } else if (event.target.id === 'classicPaperImage') {
    game.human.token = 'paper';
  } else if (event.target.id === 'classicScissorsImage') {
    game.human.token = 'scissors';
  }
  hideGameOptions();
  showChosenFighters();
  var didHumanWinClassic = game.checkIfPlayerWinsClassic();
  switch(didHumanWinClassic) {
    case true:
      updateWins(humanWin, human);
      subHeaderText.innerText = "Human won this round!";
    break;
    case false:
      updateWins(computerWin, computer);
      subHeaderText.innerText = "Computer won this round!";
    break;
    default:
      subHeaderText.innerText = "It's a draw!";
  }
  setTimeout(() => {
    game.resetGame()
  }, 1000);
  game.setClassicGameType();
};

function startDifficultGame(choice) {
  game.computer.token = randomDifficultChoice();
  if (event.target.id === 'difficultRockImage') {
    game.human.token = 'rock';
  } else if (event.target.id === 'difficultPaperImage') {
    game.human.token = 'paper';
  } else if (event.target.id === 'difficultScissorsImage') {
    game.human.token = 'scissors';
  } else if (event.target.id === 'difficultLizardImage') {
    game.human.token = 'lizard';
  } else if (event.target.id === 'difficultSpockImage') {
    game.human.token = 'spock';
  }
  hideGameOptions();
  showChosenFighters();
  var didHumanWinDifficult = game.checkIfPlayerWinsDifficult();
  switch(didHumanWinDifficult) {
    case true:
      updateWins(humanWin, human);
      subHeaderText.innerText = "Human won this round!";
    break;
    case false:
      updateWins(computerWin, computer);
      subHeaderText.innerText = "Computer won this round!";
    break;
    default:
      subHeaderText.innerText = "It's a draw!";
  }
  setTimeout(() => {
    game.resetGame()
  }, 1000);
  game.setDifficultGameType();
};

function changeGameOption() {
  toggleViews(difficultGameButton);
  toggleViews(classicGameButton);
  hideGameOptions();
  toggleViews(changeGameButton);
  subHeaderText.innerText = 'Choose Your Game!';
};
