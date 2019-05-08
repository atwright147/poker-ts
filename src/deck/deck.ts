import { ICard } from '../interfaces/card.interface';

export class Deck {
  private myDeck: ICard[];
  private suitsInDeck = [
    'clubs',
    'diamonds',
    'hearts',
    'spades',
  ];
  private cardsInDeck = [
    'A',
    'K',
    'Q',
    'J',
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
  ];

  get all(): ICard[] {
    return this.myDeck;
  }

  get hand(): ICard[] {
    return this.myDeck.splice(0, 3);
  }

  get card(): ICard {
    return this.myDeck.splice(0, 1)[0];
  }

  generate(): void {
    const generatedDeck = [];

    this.suitsInDeck.forEach((suit) => {
      this.cardsInDeck.forEach((card) => {
        generatedDeck.push({ suit, card });
      });
    });

    this.myDeck = generatedDeck;
    this.shuffle();
  }

  private shuffle() {
    let iteration = 0;
    const numCards = this.myDeck.length;

    while (iteration < numCards) {
      const rand = this.randomInt(1, numCards - 1);
      [this.myDeck[0], this.myDeck[rand]] = [this.myDeck[rand], this.myDeck[0]];
      iteration += 1;
    }
  }
}
