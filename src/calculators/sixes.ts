export function calculateSixes(diceSet: Array<number>) {
  return diceSet.reduce((sum, value) => (value === 6 ? sum + value : sum), 0);
}
