import { describe, it, expect } from 'vitest';
import { calculateFives } from '../../src/calculators/fives';

describe('calculateFives', () => {
  it('calculateFives returns returns sum of fives', () => {
    expect(calculateFives([1, 2, 2, 6, 3])).toBe(0);
    expect(calculateFives([1, 1, 6, 5, 2])).toBe(5);
    expect(calculateFives([3, 5, 5, 6, 3])).toBe(10);
    expect(calculateFives([4, 5, 5, 3, 5])).toBe(15);
    expect(calculateFives([5, 5, 5, 1, 5])).toBe(20);
    expect(calculateFives([5, 5, 5, 5, 5])).toBe(25);
  });
});
