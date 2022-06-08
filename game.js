class Game {
  constructor(human, computer) {
    this.human = human;
    this.computer = computer;
    this.isClassicGameType = true;
  }
  setClassicGameType() {
    this.isClassicGameType = true;
  }
  setDifficultGameType() {
    this.isClassicGameType = false;
  }
  getPossibleMoves() {
    if (this.isClassicGameType) {
      return [rock, paper, scissors];
    } else {
      return [rock, paper, scissors, lizzard, spock];
    }
  }
  handlePlayerMove(playerSelection) {
    // function in main.js
    var computerSelection = this.computer.takeTurn(this.getPossibleMoves())
    if (playerSelection === computerSelection) {
      return 'TIE';
    }
    var playerWins = false
    if (this.isClassicGameType) {
      playerWins = checkIfPlayerWinsClassic(playerSelection, computerSelection);
    } else {
      playerWins = checkIfPlayerWinsDifficult(playerSelection, computerSelection)
    }
    if (playerWins) {
        // increment human.wins
        // return 'HUMAN'
    } else {
        // increment computer.wins
        // return 'COMPUTER'
    }
  }
  checkIfPlayerWinsClassic(playerSelection, computerSelection) {
    var playerWins = false
    if (playerSelection === rock) {
      playerWins = computerSelection === scissors;
    } else if (playerSelection === paper) {
      playerWins = computerSelection === rock;
    } else if (playerSelection === scissors) {
      playerWins = computerSelection === paper;
    }
    return playerWins;
  }
  checkIfPlayerWinsDifficult(playerSelection, computerSelection) {
    var playerWins = false
    if (playerSelection === rock) {
      playerWins = computerSelection === scissors || computerSelection === lizzard;
    } else if (playerSelection === paper) {
      playerWins = computerSelection === rock || computerSelection === spock;
    } else if (playerSelection === scissors) {
      playerWins = computerSelection === paper || computerSelection === lizzard;
    } else if (playerSelection === lizzard) {
      playerWins = computerSelection === paper || computerSelection === spock;
    } else if (playerSelection === spock) {
      playerWins = computerSelection === scissors || computerSelection === rock;
    }
    return playerWins;
  }
}

// global constants
// array data type or object

const rock = {
  image: "assets/happy-rocks.svg";
}
const paper = {
  image: "assets/happy-paper.svg";
}
const scissors = {
  image: "assets/happy-scissors.svg";
}

const lizzard = {
  image: "assets/happy-lizzard.svg";
}

const spock = {
  image: "assets/spock.svg";
}


module.exports = Game;
