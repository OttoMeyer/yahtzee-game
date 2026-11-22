export function calculateThrees(diceSet: Array<number>) {
  return diceSet.reduce((sum, value) => (value === 3 ? sum + value : sum), 0);
}
