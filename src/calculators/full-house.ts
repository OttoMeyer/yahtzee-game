import { getKindCount } from './helpers/kind-count';

export function calculateFullHouse(diceSet: Array<number>): number {
  if (!getKindCount(diceSet).some((value) => value === 3)) return 0;
  if (!getKindCount(diceSet).some((value) => value === 2)) return 0;
  return 25;
}
