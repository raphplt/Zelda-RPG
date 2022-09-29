/* eslint-disable import/no-mutable-exports */
import { combat, death } from './fonctionCombat';
import { spriteCastle } from './sprites';
import {
  tabPlayer, tabBoss, tabEnemy, randomChar,
} from './fonctionAleat';

const readline = require('readline-sync');

export let playerHP : number = 0;

function start(lvl) {
  const player = randomChar(tabPlayer, 1);
  playerHP = player.hp;
  console.log(`Hello hero, you play ${player.name}`);
  let i : number = 0;
  while (i < 10) {
    i += 1;
    if (i === 10) {
      const next = readline.keyInYN('Do you want to fight the boss ?');
      if (next === false) {
        console.log('No room for weakness here');
        return;
      }
      const boss = randomChar(tabBoss, lvl);
      console.log(`You have entered the path number ${i}`);
      console.log('============ BOSS FIGHT  ============');
      combat(boss, player);
      if (death === false) {
        console.log('Congratulation ! You finished the game !');
      }
    } else {
      if (death === false) {
        const enemy = randomChar(tabEnemy, lvl);
        console.log(`You have entered the path number ${i}`);
        console.log(`============ FIGHT ${i} ============`);
        combat(enemy, player);
      }
      if (death === true) {
        return;
      }
      console.log(`\x1b[35mCongratulations, you beat the enemy from floor\x1b[0m \x1b[33m${i}\x1b[0m! \x1b[35mGet to the top floor\x1b[0m`);
      console.log('============ END OF FIGTH ============');
      const next = readline.keyInYN('Do you want to go to the next floor?');
      if (next === false) {
        console.log('No room for weakness here');
        return;
      }
    }
  }
}

function entry(lvl: number) {
  console.log('\n                            WELCOME TO THE CASTLE OF HYRULE ');
  console.log(spriteCastle);
  const enter = readline.keyInYN('Do you want to enter in the castle ?');
  if (enter === true) {
    start(lvl);
  }
}

export default function startGame() {
  const choose = readline.keyInSelect(['New Game', 'Quit']);
  if (choose === 0) {
    const difficulty = readline.keyInSelect(['Normal', 'Difficult', 'Insane'], 'Chosse you difficulty');
    console.log('Starting the game ...');
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
