import { describe, it, expect } from 'vitest';
import { calculateFourKind } from '../../src/calculators/four-of-a-kind';

describe('calculateFourKind', () => {
  it('calculateFourKind if >= 4 numbers are the same returns sum of values', () => {
    expect(calculateFourKind([1, 1, 1, 5, 1])).toBe(9);
    expect(calculateFourKind([6, 2, 2, 2, 2])).toBe(14);
    expect(calculateFourKind([3, 3, 3, 3, 3])).toBe(15);
    expect(calculateFourKind([3, 4, 4, 4, 4])).toBe(19);
    expect(calculateFourKind([6, 5, 5, 5, 5])).toBe(26);
    expect(calculateFourKind([6, 6, 6, 6, 3])).toBe(27);
  });
  it('calculateFourKind if < 4 numbers are the same returns 0', () => {
    expect(calculateFourKind([1, 2, 6, 2, 2])).toBe(0);
    expect(calculateFourKind([1, 6, 2, 6, 3])).toBe(0);
    expect(calculateFourKind([3, 6, 3, 1, 3])).toBe(0);
    expect(calculateFourKind([4, 5, 1, 6, 2])).toBe(0);
    expect(calculateFourKind([6, 1, 1, 3, 6])).toBe(0);
    expect(calculateFourKind([2, 6, 5, 2, 4])).toBe(0);
  });
});
