export function isIncludeEvery(numberSet: Array<number>, mask: Array<number>) {
  return mask.every((maskValue) => numberSet.some((diceValue) => maskValue === diceValue));
}
