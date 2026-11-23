import { isIncludeEvery } from './helpers/include-every';

export function calculateSmallStraight(diceSet: Array<number>): number {
  const masks = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
  ];
  if (!masks.some((mask) => isIncludeEvery(diceSet, mask))) return 0;
  return 30;
}
