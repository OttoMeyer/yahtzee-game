import { getKindCount } from './kind-count';

export function calculateThreeKind(diceSet: Array<number>) {
  if (!getKindCount(diceSet).some((value) => value >= 3)) return 0;
  return diceSet.reduce((sum, value) => sum + value, 0);
}
