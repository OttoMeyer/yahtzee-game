import { getSumOf } from './helpers/sums';

export function calculateSixes(diceSet: Array<number>): number {
  return getSumOf(diceSet, 6);
}
