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
