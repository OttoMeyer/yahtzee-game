import { calculateAces } from './calculators/aces';
import { calculateTwos } from './calculators/twos';
import { calculateThrees } from './calculators/threes';
import { calculateFours } from './calculators/fours';
import { calculateFives } from './calculators/fives';
import { calculateSixes } from './calculators/sixes';
import { calculateChance } from './calculators/chance';
import { calculateThreeKind } from './calculators/three-of-a-kind';
import { calculateFourKind } from './calculators/four-of-a-kind';
import { calculateFullHouse } from './calculators/full-house';
import { calculateSmallStraight } from './calculators/small-straight';
import { calculateLargeStraight } from './calculators/large-straight';
import { calculateYahtzee } from './calculators/yahtzee';

export type ScoreType = {
  [key: string]: number | undefined;
  aces?: number;
  twos?: number;
  threes?: number;
  fours?: number;
  fives?: number;
  sixes?: number;
  chance?: number;
  threeOfKind?: number;
  fourOfKind?: number;
  fullHouse?: number;
  smallStraight?: number;
  largeStraight?: number;
  yahtzee?: number;
};

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

export function getScore(diceSet: Array<number>): ScoreType {
  return {
    aces: calculateAces(diceSet),
    twos: calculateTwos(diceSet),
    threes: calculateThrees(diceSet),
    fours: calculateFours(diceSet),
    fives: calculateFives(diceSet),
    sixes: calculateSixes(diceSet),
    chance: calculateChance(diceSet),
    threeOfKind: calculateThreeKind(diceSet),
    fourOfKind: calculateFourKind(diceSet),
    fullHouse: calculateFullHouse(diceSet),
    smallStraight: calculateSmallStraight(diceSet),
    largeStraight: calculateLargeStraight(diceSet),
    yahtzee: calculateYahtzee(diceSet),
  };
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
