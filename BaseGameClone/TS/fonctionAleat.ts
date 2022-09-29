import { readFileSync } from 'fs';
import CharStats from './instances';

const content = readFileSync('../JSON/enemies.json', 'utf-8');
const parseE : CharStats[] = JSON.parse(content);

const content1 = readFileSync('../JSON/players.json', 'utf-8');
const parseP : CharStats[] = JSON.parse(content1);

const content2 = readFileSync('../JSON/bosses.json', 'utf-8');
const parseB : CharStats[] = JSON.parse(content2);

export const tabEnemy : any[] = [];
for (let a: number = 0; a < parseE.length; a += 1) {
  for (let b: number = 0; b < parseE[a].rarity; b += 1) {
    tabEnemy.push(parseE[a]);
  }
}

export const tabPlayer : any[] = [];
for (let a: number = 0; a < parseP.length; a += 1) {
  for (let b: number = 0; b < parseP[a].rarity; b += 1) {
    tabPlayer.push(parseP[a]);
  }
}

export const tabBoss : any[] = [];
for (let a: number = 0; a < parseB.length; a += 1) {
  for (let b: number = 0; b < parseB[a].rarity; b += 1) {
    tabBoss.push(parseB[a]);
  }
}

export function randomChar(tab : any[]) {
  const rand = Math.floor(Math.random() * tab.length);
  const rChar = tab[rand];
  return rChar;
}
