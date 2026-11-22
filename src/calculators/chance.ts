import { getSum } from './helpers/sums';

export function calculateChance(diceSet: Array<number>): number {
  return getSum(diceSet);
}
