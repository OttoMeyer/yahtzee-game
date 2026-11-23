import { getSumOf } from './helpers/sums';

export function calculateAces(diceSet: Array<number>): number {
  return getSumOf(diceSet, 1);
}
