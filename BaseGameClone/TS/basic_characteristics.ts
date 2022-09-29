import { readFileSync } from 'fs';
import CharStats, { Classe } from './instances';

export function dispayChar(display: CharStats) {
  const content = readFileSync('../JSON/classes.json', 'utf-8');
  const parseClass : Classe[] = JSON.parse(content);
  let displayClass : string = '';
  for (let a : number = 0; a < parseClass.length; a += 1) {
    if (parseClass[a].id === display.id) {
      displayClass = parseClass[a].name;
    }
  }
  const content1 = readFileSync('../JSON/races.json', 'utf-8');
  const parseRaces : Classe[] = JSON.parse(content1);
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

export function dmgModif() {

}
