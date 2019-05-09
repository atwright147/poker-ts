import { expect } from 'chai';
import * as sinon from 'sinon';

import { randomInt } from './randomInt';

describe('randomInt', () => {
  const sandbox = sinon.createSandbox();

  afterEach(function () {
    sandbox.restore();
  });

  it('should `Math.random()` once', () => {
    const mathRandomStub = sandbox.stub(Math, 'random').returns(0.2);

    randomInt(1, 5);
    expect(mathRandomStub.callCount).to.equal(1);
  });

  it('should generate a "random" number', () => {
    sandbox.stub(Math, 'random').returns(0.2);

    expect(randomInt(1, 5)).to.equal(2);
  });
});
