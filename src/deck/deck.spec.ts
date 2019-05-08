import { expect } from 'chai';
import * as sinon from 'sinon';

import { Deck } from './deck';
import * as randomHeleper from '../helpers/randomInt/randomInt';

describe('Deck', () => {
  let deck;
  const unshuffledDeck = [
    {
      "suit": "clubs",
      "card": "A"
    },
    {
      "suit": "clubs",
      "card": "K"
    },
    {
      "suit": "clubs",
      "card": "Q"
    },
    {
      "suit": "clubs",
      "card": "J"
    },
    {
      "suit": "clubs",
      "card": 10
    },
    {
      "suit": "clubs",
      "card": 9
    },
    {
      "suit": "clubs",
      "card": 8
    },
    {
      "suit": "clubs",
      "card": 7
    },
    {
      "suit": "clubs",
      "card": 6
    },
    {
      "suit": "clubs",
      "card": 5
    },
    {
      "suit": "clubs",
      "card": 4
    },
    {
      "suit": "clubs",
      "card": 3
    },
    {
      "suit": "clubs",
      "card": 2
    },
    {
      "suit": "diamonds",
      "card": "A"
    },
    {
      "suit": "diamonds",
      "card": "K"
    },
    {
      "suit": "diamonds",
      "card": "Q"
    },
    {
      "suit": "diamonds",
      "card": "J"
    },
    {
      "suit": "diamonds",
      "card": 10
    },
    {
      "suit": "diamonds",
      "card": 9
    },
    {
      "suit": "diamonds",
      "card": 8
    },
    {
      "suit": "diamonds",
      "card": 7
    },
    {
      "suit": "diamonds",
      "card": 6
    },
    {
      "suit": "diamonds",
      "card": 5
    },
    {
      "suit": "diamonds",
      "card": 4
    },
    {
      "suit": "diamonds",
      "card": 3
    },
    {
      "suit": "diamonds",
      "card": 2
    },
    {
      "suit": "hearts",
      "card": "A"
    },
    {
      "suit": "hearts",
      "card": "K"
    },
    {
      "suit": "hearts",
      "card": "Q"
    },
    {
      "suit": "hearts",
      "card": "J"
    },
    {
      "suit": "hearts",
      "card": 10
    },
    {
      "suit": "hearts",
      "card": 9
    },
    {
      "suit": "hearts",
      "card": 8
    },
    {
      "suit": "hearts",
      "card": 7
    },
    {
      "suit": "hearts",
      "card": 6
    },
    {
      "suit": "hearts",
      "card": 5
    },
    {
      "suit": "hearts",
      "card": 4
    },
    {
      "suit": "hearts",
      "card": 3
    },
    {
      "suit": "hearts",
      "card": 2
    },
    {
      "suit": "spades",
      "card": "A"
    },
    {
      "suit": "spades",
      "card": "K"
    },
    {
      "suit": "spades",
      "card": "Q"
    },
    {
      "suit": "spades",
      "card": "J"
    },
    {
      "suit": "spades",
      "card": 10
    },
    {
      "suit": "spades",
      "card": 9
    },
    {
      "suit": "spades",
      "card": 8
    },
    {
      "suit": "spades",
      "card": 7
    },
    {
      "suit": "spades",
      "card": 6
    },
    {
      "suit": "spades",
      "card": 5
    },
    {
      "suit": "spades",
      "card": 4
    },
    {
      "suit": "spades",
      "card": 3
    },
    {
      "suit": "spades",
      "card": 2
    }
  ];

  beforeEach(() => {
    deck = new Deck();
  });

  it('should return a full deck of 52 cards', () => {
    const randomIntStub = sinon.stub(randomHeleper, 'randomInt').returns(0);
    deck.generate();
    expect(randomIntStub.callCount).to.equal(52);
    expect(deck.all).to.deep.equal(unshuffledDeck);
  });
});
