import { getSumOf } from './helpers/sums';

export function calculateFives(diceSet: Array<number>): number {
  return getSumOf(diceSet, 5);
}
