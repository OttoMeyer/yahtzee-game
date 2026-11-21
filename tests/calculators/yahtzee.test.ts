import { describe, it, expect } from 'vitest';
import { calculateLargeStraight } from '../../src/calculators/large-straight';

describe('calculateLargeStraight', () => {
  it('calculateLargeStraight if all five dice the same returns 50', () => {
    expect(calculateLargeStraight([1, 1, 1, 1, 1])).toBe(50);
    expect(calculateLargeStraight([2, 2, 2, 2, 2])).toBe(50);
    expect(calculateLargeStraight([3, 3, 3, 3, 3])).toBe(50);
    expect(calculateLargeStraight([4, 4, 4, 4, 4])).toBe(50);
    expect(calculateLargeStraight([5, 5, 5, 5, 5])).toBe(50);
    expect(calculateLargeStraight([6, 6, 6, 6, 6])).toBe(50);
  });
  it('calculateLargeStraight if not all five dice the same returns 0', () => {
    expect(calculateLargeStraight([2, 2, 2, 1, 1])).toBe(0);
    expect(calculateLargeStraight([4, 4, 4, 1, 4])).toBe(0);
    expect(calculateLargeStraight([1, 2, 3, 4, 5])).toBe(0);
    expect(calculateLargeStraight([3, 1, 5, 2, 5])).toBe(0);
    expect(calculateLargeStraight([2, 1, 6, 3, 6])).toBe(0);
    expect(calculateLargeStraight([1, 5, 5, 2, 3])).toBe(0);
  });
});
