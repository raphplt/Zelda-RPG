import { readFileSync } from 'fs';
import CharStats, { Classe } from './instances';

const content = readFileSync('../JSON/classes.json', 'utf-8');
export const parseClass : Classe[] = JSON.parse(content);
const content1 = readFileSync('../JSON/races.json', 'utf-8');
export const parseRaces : Classe[] = JSON.parse(content1);

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
  console.log('               INFORMATIONS');
  console.log('===========================================');
  console.log(`Name: ${display.name}\nClass: ${displayClass}\nRace: ${displayRace}\nHP: ${display.hp}\nStrength: ${display.str}\nDef: ${display.def}\nRes: ${display.res}\nSpeed: ${display.spd}`);
  console.log('===========================================');
}
