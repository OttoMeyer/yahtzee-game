import { describe, it, expect } from 'vitest';
import { calculateThrees } from '../../src/calculators/threes';

describe('calculateThrees', () => {
  it('calculateThrees returns returns sum of threes', () => {
    expect(calculateThrees([5, 6, 4, 1, 4])).toBe(0);
    expect(calculateThrees([1, 5, 3, 1, 2])).toBe(3);
    expect(calculateThrees([3, 6, 5, 3, 5])).toBe(6);
    expect(calculateThrees([3, 1, 3, 3, 6])).toBe(9);
    expect(calculateThrees([3, 3, 3, 1, 3])).toBe(12);
    expect(calculateThrees([3, 3, 3, 3, 3])).toBe(15);
  });
});
