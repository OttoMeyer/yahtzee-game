import { describe, it, expect } from 'vitest';
import { calculateFours } from '../../src/calculators/fours';

describe('calculateFours', () => {
  it('calculateFours returns returns sum of fours', () => {
    expect(calculateFours([5, 6, 2, 1, 1])).toBe(0);
    expect(calculateFours([1, 4, 3, 1, 2])).toBe(4);
    expect(calculateFours([3, 6, 5, 4, 4])).toBe(8);
    expect(calculateFours([4, 4, 4, 3, 6])).toBe(12);
    expect(calculateFours([3, 4, 4, 4, 4])).toBe(16);
    expect(calculateFours([4, 4, 4, 4, 4])).toBe(20);
  });
});
