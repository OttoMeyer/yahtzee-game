import { describe, it, expect } from 'vitest';
import { calculateSmallStraight } from '../../src/calculators/small-straight';

describe('calculateSmallStraight', () => {
  it('calculateSmallStraight if four sequential dice returns 30', () => {
    expect(calculateSmallStraight([1, 2, 3, 4, 6])).toBe(30);
    expect(calculateSmallStraight([1, 2, 2, 3, 4])).toBe(30);
    expect(calculateSmallStraight([2, 4, 2, 3, 5])).toBe(30);
    expect(calculateSmallStraight([1, 3, 5, 4, 6])).toBe(30);
    expect(calculateSmallStraight([1, 2, 3, 4, 5])).toBe(30);
    expect(calculateSmallStraight([6, 5, 4, 3, 2])).toBe(30);
  });
  it('calculateSmallStraight if four not sequential dice returns 0', () => {
    expect(calculateSmallStraight([2, 3, 2, 1, 1])).toBe(0);
    expect(calculateSmallStraight([5, 1, 2, 2, 5])).toBe(0);
    expect(calculateSmallStraight([3, 6, 3, 1, 2])).toBe(0);
    expect(calculateSmallStraight([3, 3, 3, 2, 2])).toBe(0);
    expect(calculateSmallStraight([2, 1, 6, 2, 2])).toBe(0);
    expect(calculateSmallStraight([1, 2, 5, 2, 2])).toBe(0);
  });
});
