export function getKindCount(diceSet: Array<number>) {
  let cupySet = [...diceSet];
  const mask = [];
  while (cupySet.length !== 0) {
    const check = cupySet[0];
    const filteredArr = cupySet.filter((value) => value !== check);
    mask.push(cupySet.length - filteredArr.length);
    cupySet = filteredArr;
  }
  return mask;
}
