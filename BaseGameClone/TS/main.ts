import { combat, death } from './fonctionCombat';
import { spriteCastle } from './sprites';
import {
  tabPlayer, tabBoss, tabEnemy, randomChar,
} from './fonctionAleat';

const readline = require('readline-sync');

function start() {
  const player = randomChar(tabPlayer);
  console.log(`Hello hero, you play ${player.name}`);
  let i : number = 0;
  while (i < 10) {
    if (i === 9) {
      const next = readline.keyInYN('Do you want to fight the boss ?');
      if (next === false) {
        console.log('No room for weakness here');
        return;
      }
      const boss = randomChar(tabBoss);
      console.log(`You have entered the path number ${i}`);
      console.log('============ BOSS FIGHT  ============');
      combat(boss, player);
    } else {
      const enemy = randomChar(tabEnemy);
      console.log(`You have entered the path number ${i + 1}`);
      console.log(`============ FIGHT ${i + 1} ============`);
      combat(enemy, player);
      if (death === true) {
        return;
      }
      i += 1;

      console.log(`\x1b[35mCongratulations, you beat the enemy from floor\x1b[0m \x1b[33m${i + 1}\x1b[0m! \x1b[35mGet to the top floor\x1b[0m`);
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
