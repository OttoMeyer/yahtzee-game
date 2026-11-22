import { getKindCount } from './helpers/kind-count';
import { getSum } from './helpers/sums';

export function calculateThreeKind(diceSet: Array<number>): number {
  if (!getKindCount(diceSet).some((value) => value >= 3)) return 0;
  return getSum(diceSet);
}
