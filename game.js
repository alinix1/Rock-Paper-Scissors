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
  checkIfPlayerWinsClassic() {
    if (this.human.token === 'rock' && this.computer.token === 'scissors' || this.human.token === 'paper' && this.computer.token === 'rock' || this.human.token === 'scissors' && this.computer.token === 'paper') {
      this.human.increaseWins();
      return true;
    } else if (this.human.token === 'rock' && this.computer.token === 'paper' || this.human.token === 'paper' && this.computer.token === 'scissors' || this.human.token === 'scissors' && this.computer.token === 'rock') {
      this.computer.increaseWins();
      return false;
    } else if (this.human.token === this.computer.token) {
      return undefined;
    }
  }
  checkIfPlayerWinsDifficult() {
    if (this.human.token === 'rock' && this.computer.token === 'scissors' || this.human.token === 'paper' && this.computer.token === 'rock' || this.human.token === 'scissors' && this.computer.token === 'paper' || this.human.token === 'rock' && this.computer.token === 'lizard' || this.human.token === 'paper' && this.computer.token === 'spock' || this.human.token === 'scissors' && this.computer.token === 'lizard' || this.human.token === 'lizard' && this.computer.token === 'paper' || this.human.token === 'lizard' && this.computer.token === 'spock' || this.human.token === 'spock' && this.computer.token === 'scissors' || this.human.token === 'spock' && this.computer.token === 'rock') {
      this.human.increaseWins();
      return true;
    } else if (this.human.token === 'rock' && this.computer.token === 'paper' || this.human.token === 'paper' && this.computer.token === 'scissors' || this.human.token === 'scissors' && this.computer.token === 'rock' || this.human.token === 'rock' && this.computer.token === 'spock' || this.human.token === 'paper' && this.computer.token === 'lizard' || this.human.token === 'scissors' && this.computer.token === 'spock' || this.human.token === 'lizard' && this.computer.token === 'rock' || this.human.token === 'lizard' && this.computer.token === 'scissors' || this.human.token === 'spock' && this.computer.token === 'paper' || this.human.token === 'spock' && this.computer.token === 'lizard') {
      this.computer.increaseWins();
      return false;
    } else {
      return undefined;
    }
  }
  resetGame() {
    chosenPlayers.classList.add('hidden');
    changeGameButton.classList.remove('hidden');
    subHeaderText.innerText === 'Choose your fighter!';
    if (this.isClassicGameType) {
      showClassicOptions();
    } else {
      showDifficultOptions();
    }
  }
};
