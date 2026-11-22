export function calculateAces(diceSet: Array<number>) {
  return diceSet.reduce((sum, value) => (value === 1 ? sum + value : sum), 0);
}
