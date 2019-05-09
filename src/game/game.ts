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
    deck.generate();

    while (iteration < this.numPlayers) {
      const player = new Player(`Player ${iteration + 1}`);
      player.hand = deck.hand;
      players.push(player);
      iteration += 1;
    }

    const dealer = new Player(`Dealer`);
    dealer.hand = deck.hand;
    players.push(dealer);

    return players;
  }

  get state() {
    return JSON.stringify(this.deal(), null, 4);
  }
}
