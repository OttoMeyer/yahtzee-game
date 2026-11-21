import { describe, it, expect } from 'vitest';
import { calculateLargeStraight } from '../../src/calculators/large-straight';

describe('calculateLargeStraight', () => {
  it('calculateLargeStraight if five sequential dice returns 40', () => {
    expect(calculateLargeStraight([1, 2, 3, 4, 5])).toBe(40);
    expect(calculateLargeStraight([2, 3, 4, 5, 6])).toBe(40);
    expect(calculateLargeStraight([1, 4, 2, 5, 3])).toBe(40);
    expect(calculateLargeStraight([6, 3, 2, 4, 5])).toBe(40);
    expect(calculateLargeStraight([5, 2, 3, 4, 6])).toBe(40);
    expect(calculateLargeStraight([1, 5, 2, 3, 4])).toBe(40);
  });
  it('calculateLargeStraight if five not sequential dice returns 0', () => {
    expect(calculateLargeStraight([2, 2, 2, 1, 1])).toBe(0);
    expect(calculateLargeStraight([5, 4, 2, 1, 5])).toBe(0);
    expect(calculateLargeStraight([1, 2, 3, 4, 2])).toBe(0);
    expect(calculateLargeStraight([3, 3, 4, 2, 2])).toBe(0);
    expect(calculateLargeStraight([2, 1, 6, 5, 6])).toBe(0);
    expect(calculateLargeStraight([1, 6, 5, 1, 2])).toBe(0);
  });
});
