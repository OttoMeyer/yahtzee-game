import { getKindCount } from './helpers/kind-count';
import { getSum } from './helpers/sums';

export function calculateFourKind(diceSet: Array<number>): number {
  if (!getKindCount(diceSet).some((value) => value >= 4)) return 0;
  return getSum(diceSet);
}
