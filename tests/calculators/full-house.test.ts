import { describe, it, expect } from 'vitest';
import { calculateFullHouse } from '../../src/calculators/full-house';

describe('calculateFullHouse', () => {
  it('calculateFullHouse if 3 and 2 numbers are the same returns 25', () => {
    expect(calculateFullHouse([1, 1, 1, 5, 5])).toBe(25);
    expect(calculateFullHouse([6, 2, 2, 6, 2])).toBe(25);
    expect(calculateFullHouse([2, 3, 3, 3, 2])).toBe(25);
    expect(calculateFullHouse([5, 5, 4, 4, 4])).toBe(25);
    expect(calculateFullHouse([1, 5, 5, 5, 1])).toBe(25);
    expect(calculateFullHouse([6, 6, 3, 3, 3])).toBe(25);
  });
  it('calculateFullHouse if not 3 and 2 numbers are the same returns 0', () => {
    expect(calculateFullHouse([1, 1, 2, 1, 1])).toBe(0);
    expect(calculateFullHouse([5, 6, 2, 6, 5])).toBe(0);
    expect(calculateFullHouse([3, 6, 6, 1, 2])).toBe(0);
    expect(calculateFullHouse([6, 6, 5, 6, 6])).toBe(0);
    expect(calculateFullHouse([2, 1, 4, 3, 6])).toBe(0);
    expect(calculateFullHouse([2, 6, 5, 2, 2])).toBe(0);
  });
  it('calculateFullHouse 5 of a kind is not Full House and returns 0', () => {
    expect(calculateFullHouse([1, 1, 1, 1, 1])).toBe(0);
    expect(calculateFullHouse([2, 2, 2, 2, 2])).toBe(0);
    expect(calculateFullHouse([3, 3, 3, 3, 3])).toBe(0);
    expect(calculateFullHouse([4, 4, 4, 4, 4])).toBe(0);
    expect(calculateFullHouse([5, 5, 5, 5, 5])).toBe(0);
    expect(calculateFullHouse([6, 6, 6, 6, 6])).toBe(0);
  });
});
