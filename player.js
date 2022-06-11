class Player {
  constructor(name) {
    this.name = name;
    this.token;
    this.wins = 0;
  }
  takeTurn(token) {
    this.token = token;
  }
  increaseWins() {
    this.wins++;
  }
};
