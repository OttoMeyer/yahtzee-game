export function calculateSmallStraight(diceSet: Array<number>) {
  const masks = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
  ];
  if (
    !masks.some((mask) =>
      mask.every((maskValue) => diceSet.some((diceValue) => maskValue === diceValue)),
    )
  )
    return 0;
  return 30;
}
