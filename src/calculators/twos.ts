import { getSumOf } from './helpers/sums';

export function calculateTwos(diceSet: Array<number>): number {
  return getSumOf(diceSet, 2);
}
