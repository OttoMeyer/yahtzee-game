import { getKindCount } from './kind-count';

export function calculateYahtzee(diceSet: Array<number>) {
  if (!getKindCount(diceSet).some((value) => value === 5)) return 0;
  return 50;
}
