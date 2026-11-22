import { describe, it, expect } from 'vitest';
import { calculateYahtzee } from '../../src/calculators/yahtzee';

describe('calculateYahtzee', () => {
  it('calculateYahtzee if all five dice the same returns 50', () => {
    expect(calculateYahtzee([1, 1, 1, 1, 1])).toBe(50);
    expect(calculateYahtzee([2, 2, 2, 2, 2])).toBe(50);
    expect(calculateYahtzee([3, 3, 3, 3, 3])).toBe(50);
    expect(calculateYahtzee([4, 4, 4, 4, 4])).toBe(50);
    expect(calculateYahtzee([5, 5, 5, 5, 5])).toBe(50);
    expect(calculateYahtzee([6, 6, 6, 6, 6])).toBe(50);
  });
  it('calculateYahtzee if not all five dice the same returns 0', () => {
    expect(calculateYahtzee([2, 2, 2, 1, 1])).toBe(0);
    expect(calculateYahtzee([4, 4, 4, 1, 4])).toBe(0);
    expect(calculateYahtzee([1, 2, 3, 4, 5])).toBe(0);
    expect(calculateYahtzee([3, 1, 5, 2, 5])).toBe(0);
    expect(calculateYahtzee([2, 1, 6, 3, 6])).toBe(0);
    expect(calculateYahtzee([1, 5, 5, 2, 3])).toBe(0);
  });
});
