import { ICard } from '../interfaces/card.interface';
import { Player } from '../player/player';
import { Deck } from '../deck/deck';

export class Game {
  private numPlayers: number;

  constructor(numPlayers: number) {
    this.numPlayers = numPlayers;
  }

  deal() {
    let iteration = 0;
    const players = [];
    const deck = new Deck();

    while (iteration < this.numPlayers) {
      const player = new Player(`Player ${iteration}`);
      player.hand = deck.hand;
      players.push(player);
    }

    return players;
  }

  get state() {
    return JSON.stringify(this.deal(), null, 4);
  }
}
