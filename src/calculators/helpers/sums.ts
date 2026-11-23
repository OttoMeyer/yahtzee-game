export function getSumOf(numberSet: Array<number>, numberFind: number): number {
  return numberSet.reduce((sum, value) => (value === numberFind ? sum + value : sum), 0);
}

export function getSum(numberSet: Array<number>): number {
  return numberSet.reduce((sum, value) => sum + value, 0);
}
