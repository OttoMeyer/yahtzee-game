import { describe, it, expect } from 'vitest';
import { calculateThreeKind } from '../../src/calculators/three-of-a-kind';

describe('calculateThreeKind', () => {
  it('calculateThreeKind if >= 3 numbers are the same returns sum of values', () => {
    expect(calculateThreeKind([1, 1, 1, 3, 6])).toBe(12);
    expect(calculateThreeKind([1, 2, 2, 6, 2])).toBe(13);
    expect(calculateThreeKind([3, 5, 4, 3, 3])).toBe(18);
    expect(calculateThreeKind([4, 4, 4, 4, 4])).toBe(20);
    expect(calculateThreeKind([6, 5, 1, 5, 5])).toBe(22);
    expect(calculateThreeKind([1, 6, 6, 6, 4])).toBe(23);
  });
  it('calculateThreeKind if < 3 numbers are the same returns 0', () => {
    expect(calculateThreeKind([1, 2, 1, 2, 6])).toBe(0);
    expect(calculateThreeKind([1, 6, 2, 6, 3])).toBe(0);
    expect(calculateThreeKind([3, 6, 4, 1, 3])).toBe(0);
    expect(calculateThreeKind([4, 5, 1, 6, 2])).toBe(0);
    expect(calculateThreeKind([6, 1, 1, 2, 5])).toBe(0);
    expect(calculateThreeKind([1, 6, 5, 2, 4])).toBe(0);
  });
});
