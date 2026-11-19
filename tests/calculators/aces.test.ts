import { describe, it, expect } from 'vitest';
import { calculateAces } from '../../src/calculators/aces';

describe('calculateAces', () => {
  it('calculateAces returns category correct score', () => {
    expect(calculateAces([4, 4, 2, 3, 3])).toBe(0);
    expect(calculateAces([3, 2, 5, 1, 2])).toBe(1);
    expect(calculateAces([1, 2, 5, 1, 3])).toBe(2);
    expect(calculateAces([1, 2, 1, 4, 1])).toBe(3);
    expect(calculateAces([6, 1, 1, 1, 1])).toBe(4);
    expect(calculateAces([1, 1, 1, 1, 1])).toBe(5);
  });
});
