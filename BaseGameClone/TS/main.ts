/* eslint-disable import/no-mutable-exports */
import { combat, death } from './fonctionCombat';
import { spriteCastle } from './sprites';
import {
  tabPlayer, tabBoss, tabEnemy, randomChar,
} from './fonctionAleat';

const readline = require('readline-sync');

export let playerHP : number = 0;

function start() {
  const player = randomChar(tabPlayer);
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
      const boss = randomChar(tabBoss);
      console.log(`You have entered the path number ${i}`);
      console.log('============ BOSS FIGHT  ============');
      combat(boss, player);
      if (death === false) {
        console.log('Congratulation ! You finished the game !');
      }
    } else {
      if (death === false) {
        const enemy = randomChar(tabEnemy);
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

function entry() {
  console.log('\n                            WELCOME TO THE CASTLE OF HYRULE ');
  console.log(spriteCastle);
  const enter = readline.keyInYN('Do you want to enter in the castle ?');
  if (enter === true) {
    start();
  }
}

export default function startGame() {
  const choose = readline.keyInYN('Start game ?');
  if (choose === true) {
    console.log('Starting the game ...');
    return (entry());
  }
  return console.log('Goodbye');
}
