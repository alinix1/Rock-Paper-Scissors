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
      return ['rock', 'paper', 'scissors'];
    } else {
      return ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    }
  }
  // handlePlayerMove(playerSelection) {
  //   var computerSelection = this.computer.takeTurn(this.getPossibleMoves())
  //   if (playerSelection === computerSelection) {
  //     return 'TIE';
  //   }
  //   var playerWins = false
  //   if (this.isClassicGameType) {
  //     playerWins = checkIfPlayerWinsClassic(playerSelection, computerSelection);
  //   } else {
  //     playerWins = checkIfPlayerWinsDifficult(playerSelection, computerSelection)
  //   }
  //   if (playerWins) {
  //       // increment human.wins
  //       // return 'HUMAN'
  //   } else {
  //       // increment computer.wins
  //       // return 'COMPUTER'
  //   }
  checkIfPlayerWinsClassic() {
    if (this.human.token === 'rock' && this.computer.token === 'scissors' || this.human.token === 'paper' && this.computer.token === 'rock' || this.human.token === 'scissors' && this.computer.token === 'paper') {
      this.human.increaseWins();
      return subHeaderText.innerText = "Human won this round!";
    } else if (this.human.token === 'rock' && this.computer.token === 'paper' || this.human.token === 'paper' && this.computer.token === 'scissors' || this.human.token === 'scissors' && this.computer.token === 'rock') {
      this.computer.increaseWins();
      return subHeaderText.innerText = "Computer won this round!";
    } else if (this.human.token === this.computer.token) {
      return subHeaderText.innerText = "It's a draw!";
    }
  }
  checkIfPlayerWinsDifficult() {
    if (this.human.token === 'rock' && this.computer.token === 'scissors' || this.human.token === 'paper' && this.computer.token === 'rock' || this.human.token === 'scissors' && this.computer.token === 'paper' || this.human.token === 'rock' && this.computer.token === 'lizard' || this.human.token === 'paper' && this.computer.token === 'spock' || this.human.token === 'scissors' && this.computer.token === 'lizard' || this.human.token === 'lizard' && this.computer.token === 'paper' || this.human.token === 'lizard' && this.computer.token === 'spock' || this.human.token === 'spock' && this.computer.token === 'scissors' || this.human.token === 'spock' && this.computer.token === 'rock') {
      this.human.increaseWins();
      return subHeaderText.innerText = 'Human won this round!';
    } else if (this.human.token === 'rock' && this.computer.token === 'paper' || this.human.token === 'paper' && this.computer.token === 'scissors' || this.human.token === 'scissors' && this.computer.token === 'rock' || this.human.token === 'rock' && this.computer.token === 'spock' || this.human.token === 'paper' && this.computer.token === 'lizard' || this.human.token === 'scissors' && this.computer.token === 'spock' || this.human.token === 'lizard' && this.computer.token === 'rock' || this.human.token === 'lizard' && this.computer.token === 'scissors' || this.human.token === 'spock' && this.computer.token === 'paper' || this.human.token === 'spock' && this.computer.token === 'lizard') {
      this.computer.increaseWins();
      return subHeaderText.innerText = 'Computer won this round!';
    }
  }
};
