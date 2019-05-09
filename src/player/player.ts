import { ICard } from '../interfaces/card.interface';

export class Player {
  private myHand = [];
  private myName = '';

  constructor(name: string) {
    this.myName = name;
  }

  get hand(): ICard[] {
    return this.myHand;
  }

  set hand(cards: ICard[]) {
    this.myHand = cards;
  }

  set addToHand(cards: ICard[]) {
    this.myHand = this.myHand.concat(cards);
  }

  get name(): string {
    return this.myName;
  }
}
