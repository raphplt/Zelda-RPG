import { readFileSync } from 'fs';
import CharStats, { Classe, Race } from './instances';

const content = readFileSync('../JSON/classes.json', 'utf-8');
export const parseClass : Classe[] = JSON.parse(content);
const content1 = readFileSync('../JSON/races.json', 'utf-8');
export const parseRaces : Race[] = JSON.parse(content1);

export function dispayChar(display: CharStats) {
  let displayClass : string = '';
  for (let a : number = 0; a < parseClass.length; a += 1) {
    if (parseClass[a].id === display.id) {
      displayClass = parseClass[a].name;
    }
  }

  let displayRace : string = '';
  for (let a : number = 0; a < parseRaces.length; a += 1) {
    if (parseRaces[a].id === display.id) {
      displayRace = parseRaces[a].name;
    }
  }
  console.log('              \x1b[33m- INFORMATIONS -\x1b[0m');
  console.log('===========================================');
  console.log(`\x1b[32mName:\x1b[0m ${display.name}\n\x1b[32mClass\x1b[0m: ${displayClass}\n\x1b[32mRace:\x1b[0m ${displayRace}\n\x1b[32mHP:\x1b[0m ${display.hp}\n\x1b[32mStrength:\x1b[0m ${display.str}\n\x1b[32mDef:\x1b[0m ${display.def}\n\x1b[32mRes:\x1b[0m ${display.res}\n\x1b[32mSpeed:\x1b[0m ${display.spd}`);
  console.log('===========================================');
}
