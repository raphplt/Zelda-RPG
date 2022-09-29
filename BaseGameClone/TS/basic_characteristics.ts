import { readFileSync } from 'fs';
import CharStats, { Classe } from './instances';

export function dispayChar(display: CharStats) {
  const content = readFileSync('../JSON/classes.json', 'utf-8');
  const parseClass : Classe[] = JSON.parse(content);
  console.log('               INFORMATIONS');
  console.log('===========================================');
  console.log(`Name: ${display.name}\nHP: ${display.hp}\nStrength: ${display.str}\nDef: ${display.def}\nRes: ${display.res}\nSpeed: ${display.spd}`);
  console.log('===========================================');
}

export function dmgModif() {

}
