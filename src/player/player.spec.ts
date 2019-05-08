import { expect } from 'chai';
import { Player } from './player';

describe('Player', () => {
  let player;

  beforeEach(() => {
    player = new Player('Mr Test');
  });

  it('player name should be "Mr Test"', () => {
    expect(player.name).to.equal('Mr Test');
  });

  describe('#hand', () => {
    it('should be able to set hand and get the same hand back', () => {
      const expected = [
        {
          suit: 'hearts',
          card: 'A',
        },
        {
          suit: 'hearts',
          card: 'K',
        },
        {
          suit: 'hearts',
          card: 'Q',
        },
      ];

      player.hand = expected
      expect(player.hand).to.equal(expected);
    });

    it('should be able to add to hand', () => {
      const initialHand = [
        {
          suit: 'hearts',
          card: 'A',
        },
        {
          suit: 'hearts',
          card: 'K',
        },
        {
          suit: 'hearts',
          card: 'Q',
        },
      ];

      const cardsToAddToHand = [
        {
          suit: 'hearts',
          card: 'J',
        },
      ];

      const expected = [
        {
          suit: 'hearts',
          card: 'A',
        },
        {
          suit: 'hearts',
          card: 'K',
        },
        {
          suit: 'hearts',
          card: 'Q',
        },
        {
          suit: 'hearts',
          card: 'J',
        },
      ];

      player.hand = initialHand;
      player.addToHand = cardsToAddToHand;
      expect(player.hand).to.deep.equal(expected);
    });
  });
});
