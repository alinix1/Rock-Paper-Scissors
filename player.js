class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
  }
  takeTurn(possibleMoves) {
    var index = Math.floor(Math.random() * possibleMoves.length);
    return possibleMoves[index];
    //choose a move to make
    // array is possibleMoves containing 3-5 choices
  }
}
