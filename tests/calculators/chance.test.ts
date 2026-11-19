import { describe, it, expect } from 'vitest';
import { calculateChance } from '../../src/calculators/chance';

describe('calculateChance', () => {
  it('calculateChance returns sum of values', () => {
    expect(calculateChance([3, 4, 1, 3, 6])).toBe(17);
    expect(calculateChance([1, 2, 1, 6, 2])).toBe(12);
    expect(calculateChance([1, 6, 4, 2, 6])).toBe(19);
    expect(calculateChance([1, 2, 1, 1, 1])).toBe(6);
    expect(calculateChance([6, 6, 6, 5, 2])).toBe(25);
    expect(calculateChance([1, 5, 3, 2, 4])).toBe(15);
  });
});
