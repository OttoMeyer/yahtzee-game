export function calculateFives(diceSet: Array<number>) {
  return diceSet.reduce((sum, value) => (value === 5 ? sum + value : sum), 0);
}
