import { square } from '../src';
import { expect } from 'chai';
import { describe, it } from "mocha";

describe('square', () => {
  it('should return the square of a number', () => {
    expect(square(5)).to.equal(25);
    expect(square(0)).to.equal(0);
    expect(square(-3)).to.equal(9);
  });
});