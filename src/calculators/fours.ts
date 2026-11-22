export function calculateFours(diceSet: Array<number>) {
  return diceSet.reduce((sum, value) => (value === 4 ? sum + value : sum), 0);
}
