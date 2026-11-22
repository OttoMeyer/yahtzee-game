export function calculateChance(diceSet: Array<number>) {
  return diceSet.reduce((sum, value) => sum + value, 0);
}
