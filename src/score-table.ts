import { type ScoreType } from './score-type';

export class ScoreTable {
  [key: string]: number | null;
  aces: number | null = null;
  twos: number | null = null;
  threes: number | null = null;
  fours: number | null = null;
  fives: number | null = null;
  sixes: number | null = null;
  chance: number | null = null;
  threeOfKind: number | null = null;
  fourOfKind: number | null = null;
  fullHouse: number | null = null;
  smallStraight: number | null = null;
  largeStraight: number | null = null;
  yahtzee: number | null = null;

  constructor(score: ScoreType = {}) {
    record(this, score);
  }
}

export function record(table: ScoreTable, score: ScoreType = {}): void {
  const keys = Object.keys(score);
  keys.forEach((key) => {
    if (score[key]) table[key] = score[key];
  });
}

export function getUnfilled(table: ScoreTable): Array<string> {
  const keys = Object.keys(table);
  return keys.filter((key) => table[key] === null);
}

export function getUpperSum(table: ScoreTable): number {
  const keys = ['aces', 'twos', 'threes', 'fours', 'fives', 'sixes'];
  return keys.reduce((sum, key) => {
    return table[key] ? sum + table[key] : sum;
  }, 0);
}

export function getLowerSum(table: ScoreTable): number {
  const keys = [
    'chance',
    'threeOfKind',
    'fourOfKind',
    'fullHouse',
    'smallStraight',
    'largeStraight',
    'yahtzee',
  ];
  return keys.reduce((sum, key) => {
    return table[key] ? sum + table[key] : sum;
  }, 0);
}

export function getBonus(table: ScoreTable): number {
  return getUpperSum(table) >= 63 ? 35 : 0;
}

export function getScoreSum(table: ScoreTable): number {
  let sum = 0;
  sum += getUpperSum(table);
  sum += getBonus(table);
  sum += getLowerSum(table);
  return sum;
}
