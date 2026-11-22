export function calculateTwos(diceSet: Array<number>) {
  return diceSet.reduce((sum, value) => (value === 2 ? sum + value : sum), 0);
}
