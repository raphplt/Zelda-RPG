/* eslint-disable import/no-mutable-exports */
import { combat, death } from './fonctionCombat';
import { spriteCastle, spriteZelda } from './sprites';
import {
  tabPlayer, tabBoss, tabEnemy, randomChar,
} from './fonctionAleat';

const readline = require('readline-sync');

export let playerHP : number = 0;

function start(lvl, choosefloors) {
  const player = randomChar(tabPlayer, 1);
  playerHP = player.hp;
  console.log(`Hello hero, you play ${player.name}`);
  let i : number = 0;
  while (i < choosefloors.length) {
    i += 1;
    if (i === 10 || i === 20 || i === 30 || i === 40 || i === 50
      || i === 60 || i === 70 || i === 80 || i === 90 || i === 100) {
      const next = readline.keyInYN('Do you want to fight the boss ?');
      if (next === false) {
        console.log('No room for weakness here');
        return;
      }
      const boss = randomChar(tabBoss, lvl);
      console.log(`You have entered the path number ${i}`);
      console.log('================= BOSS FIGHT  =================');
      combat(boss, player);
      if (death === false) {
        console.log(spriteZelda);
        console.log('Congratulation ! You saved the princess Zelda !');
      }
    } else {
      if (death === false) {
        const enemy = randomChar(tabEnemy, lvl);
        console.log(`You have entered the path number ${i}`);
        console.log(`================= FIGHT ${i} =================`);
        combat(enemy, player);
      }
      if (death === true) {
        return;
      }
      console.log(`\x1b[35mCongratulations, you beat the enemy from floor\x1b[0m \x1b[33m${i}\x1b[0m! \x1b[35mGet to the top floor\x1b[0m`);
      console.log('================= END OF FIGTH =================');
      const next = readline.keyInYN('Do you want to go to the next floor?');
      if (next === false) {
        console.log('No room for weakness here');
        return;
      }
      console.clear();
    }
  }
}

function entry(lvl) {
  const tabfloors: string[] = ['\x1b[35m10\x1b[0m', '\x1b[35m20\x1b[0m', '\x1b[35m30\x1b[0m', '\x1b[35m40\x1b[0m', '\x1b[35m50\x1b[0m', '\x1b[35m60\x1b[0m', '\x1b[35m70\x1b[0m', '\x1b[35m80\x1b[0m', '\x1b[35m90\x1b[0m', ' \x1b[35m100\x1b[0m'];
  const choosefloors = readline.keyInSelect(tabfloors, 'Choose the number of fights');
  console.log('Starting the game ...');
  console.clear();
  console.log('\n                          WELCOME TO THE CASTLE OF HYRULE ');
  console.log(spriteCastle);
  const enter = readline.keyInYN('Do you want to enter in the castle ?');
  if (enter === true) {
    console.clear();
    start(lvl, tabfloors[choosefloors]);
  }
}

export default function startGame() {
  console.clear();
  const choosegame = readline.keyInSelect(['\x1b[4mNew Game\x1b[0m', '\x1b[4mQuit\x1b[0m']);
  if (choosegame === 0) {
    console.clear();
    const difficulty = readline.keyInSelect(['\x1b[32mNormal\x1b[0m', '\x1b[33mDifficult\x1b[0m', '\x1b[31mInsane\x1b[0m'], 'Chosse you difficulty');
    console.clear();
    if (difficulty === 0) {
      return (entry(1));
    }
    if (difficulty === 1) {
      return (entry(1.5));
    }
    if (difficulty === 2) {
      return (entry(2));
    }
  }
  return console.log('Goodbye');
}
