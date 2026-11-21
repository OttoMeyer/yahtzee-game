import { describe, it, expect } from 'vitest';
import { calculateSixes } from '../../src/calculators/sixes';

describe('calculateSixes', () => {
  it('calculateSixes returns returns sum of sixes', () => {
    expect(calculateSixes([2, 2, 5, 5, 2])).toBe(0);
    expect(calculateSixes([1, 1, 6, 5, 2])).toBe(6);
    expect(calculateSixes([1, 1, 6, 6, 3])).toBe(12);
    expect(calculateSixes([5, 6, 2, 6, 6])).toBe(18);
    expect(calculateSixes([4, 6, 6, 6, 6])).toBe(24);
    expect(calculateSixes([6, 6, 6, 6, 6])).toBe(30);
  });
});
