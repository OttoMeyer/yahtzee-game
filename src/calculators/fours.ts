import { getSumOf } from './helpers/sums';

export function calculateFours(diceSet: Array<number>): number {
  return getSumOf(diceSet, 4);
}
