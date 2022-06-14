class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
  }
  takeTurn(token) {
    this.token = token;
  }
  increaseWins() {
    this.wins++;
  }
};