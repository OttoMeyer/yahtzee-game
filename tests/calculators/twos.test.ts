import { describe, it, expect } from 'vitest';
import { calculateTwos } from '../../src/calculators/twos';

describe('calculateTwos', () => {
  it('calculateTwos returns returns sum of twos', () => {
    expect(calculateTwos([5, 6, 1, 1, 3])).toBe(0);
    expect(calculateTwos([3, 5, 5, 1, 2])).toBe(2);
    expect(calculateTwos([1, 2, 5, 2, 3])).toBe(4);
    expect(calculateTwos([1, 2, 1, 2, 2])).toBe(6);
    expect(calculateTwos([2, 3, 2, 2, 2])).toBe(8);
    expect(calculateTwos([2, 2, 2, 2, 2])).toBe(10);
  });
});
