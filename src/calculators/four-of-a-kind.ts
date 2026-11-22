import { getKindCount } from './kind-count';

export function calculateFourKind(diceSet: Array<number>) {
  if (!getKindCount(diceSet).some((value) => value >= 4)) return 0;
  return diceSet.reduce((sum, value) => sum + value, 0);
}
