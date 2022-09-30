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

export function dmgModifFunct(player : CharStats, enemy : CharStats) {
  let dmgModifP : number = 1;
  let dmgModifE : number = 1;

  let playerParseClassW : any = [];
  let playerParseClassS : any = [];
  let enemyParseClassS : any = [];
  let enemyParseClassW : any = [];
  let playerParseRacesW : any = [];
  let playerParseRacesS : any = [];
  let enemyParseRacesS : any = [];
  let enemyParseRacesW : any = [];

  for (let a : number = 0; a < parseClass.length; a += 1) {
    if (parseClass[a].id === player.id) {
      playerParseClassW = parseClass[a].weaknesses;
      playerParseClassS = parseClass[a].strengths;
    }
  }
  for (let a : number = 0; a < parseClass.length; a += 1) {
    if (parseClass[a].id === enemy.id) {
      enemyParseClassW = parseClass[a].weaknesses;
      enemyParseClassS = parseClass[a].strengths;
    }
  }
  for (let a : number = 0; a < parseClass.length; a += 1) {
    if (parseClass[a].id === player.id) {
      playerParseRacesW = parseClass[a].weaknesses;
      playerParseRacesS = parseClass[a].strengths;
    }
  }
  for (let a : number = 0; a < parseClass.length; a += 1) {
    if (parseClass[a].id === enemy.id) {
      enemyParseRacesS = parseClass[a].weaknesses;
      enemyParseRacesW = parseClass[a].strengths;
    }
  }

  for (let a : number = 0; a < playerParseClassS.length; a += 1) {
    for (let b : number = 0; b < enemyParseClassW.length; b += 1) {
      if (playerParseClassS === enemyParseClassW) {
        dmgModifP *= 2;
        dmgModifE /= 2;
      }
    }
  }
  for (let a : number = 0; a < enemyParseClassS.length; a += 1) {
    for (let b : number = 0; b < playerParseClassW.length; b += 1) {
      if (playerParseClassW === enemyParseClassS) {
        dmgModifE *= 2;
        dmgModifP /= 2;
      }
    }
  }
  for (let a : number = 0; a < enemyParseRacesW.length; a += 1) {
    for (let b : number = 0; b < enemyParseRacesS.length; b += 1) {
      if (enemyParseRacesW === enemyParseRacesS) {
        dmgModifP *= 2;
        dmgModifE /= 2;
      }
    }
  }
  for (let a : number = 0; a < playerParseRacesS.length; a += 1) {
    for (let b : number = 0; b < playerParseRacesW.length; b += 1) {
      if (playerParseRacesW === playerParseRacesS) {
        dmgModifE *= 2;
        dmgModifP /= 2;
      }
    }
  }
  return { dmgModifE, dmgModifP };
}
