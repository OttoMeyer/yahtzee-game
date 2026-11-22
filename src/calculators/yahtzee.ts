import { getKindCount } from './helpers/kind-count';

export function calculateYahtzee(diceSet: Array<number>): number {
  if (!getKindCount(diceSet).some((value) => value === 5)) return 0;
  return 50;
}
