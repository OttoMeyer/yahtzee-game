import { getSumOf } from './helpers/sums';

export function calculateThrees(diceSet: Array<number>): number {
  return getSumOf(diceSet, 3);
}
