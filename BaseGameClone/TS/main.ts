/* eslint-disable no-param-reassign */
/* eslint-disable import/no-mutable-exports */
import { combat, death } from './fonctionCombat';
import { spriteCastle, spriteZelda } from './sprites';
import {
  tabPlayer, tabBoss, tabEnemy, randomChar,
} from './fonctionAleat';
import { Player } from './instances';

const readline = require('readline-sync');

export let playerHP : number = 0;

function start(lvl: number, choosefloors, user) {
  const player = randomChar(tabPlayer, 1);
  playerHP = player.hp;
  console.log(`~~~ Hello hero, you play \x1b[32m${player.name}\x1b[0m ~~~`);
  console.log(`~~~ You have \x1b[33m${user.gold}\x1b[0m 🪙  gold in your purse ~~~`);
  let i : number = 0;
  while (i < choosefloors.length) {
    i += 1;
    if (i === 10 || i === 20 || i === 30 || i === 40 || i === 50
      || i === 60 || i === 70 || i === 80 || i === 90 || i === 100) {
      const next = readline.keyInYN('Do you want to fight the boss ?');
      if (next === false) {
        console.log('No r\x1b[31mom for weakness here\x1b[0m');
        return;
      }
      const boss = randomChar(tabBoss, lvl);
      console.log(`You have entered the path number ${i}`);
      console.log('==================== \x1b[31mBOSS FIGHT\x1b[0m  ====================');
      combat(boss, player);
      if (death === false) {
        user.gold += 1;
        console.log(`You won \x1b[33m1\x1b[0m gold. You have \x1b[33m${user.gold}\x1b[0m 🪙  gold in your purse`);
        console.log(spriteZelda);
        console.log('Congratulation ! You saved the princess Zelda !');
      }
    } else {
      if (death === false) {
        const enemy = randomChar(tabEnemy, lvl);
        console.log(`You have entered the path number ${i}`);
        console.log(`==================== FIGHT ${i} ====================`);
        combat(enemy, player);
      }
      if (death === true) {
        return;
      }
      console.log(`\x1b[35mCongratulations, you beat the enemy from floor\x1b[0m \x1b[33m${i}\x1b[0m! \x1b[35mGet to the top floor\x1b[0m`);
      const xpadd = Math.floor(Math.random() * (50 - 15 + 1) + 15);
      user.gold += 1;
      console.log(`You won \x1b[33m1\x1b[0m gold. You have \x1b[33m${user.gold}\x1b[0m 🪙  gold in your purse`);
      user.xp += Math.ceil(xpadd);
      console.log(`You earned ${xpadd} xp !\n`);
      if (user.xp >= 100) {
        user.level += 1;
        console.log(`You just level up too level ${user.level}`);
        const chooselevelup = readline.keyInSelect(['hp', 'strength', 'resistance', 'defense', 'speed'], 'Which skills do you want to upgrade ?');
        if (chooselevelup === 0) {
          player.hp += 3;
        }
        if (chooselevelup === 1) {
          player.str += 1;
        }
        if (chooselevelup === 2) {
          player.res += 1;
        }
        if (chooselevelup === 3) {
          player.def += 1;
        }
        if (chooselevelup === 4) {
          player.speed += 1;
        }
        user.xp -= 100;
      }
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

function entry(lvl: number) {
  const tabfloors: string[] = ['\x1b[1m10\x1b[0m', '\x1b[1m20\x1b[0m', '\x1b[1m30\x1b[0m', '\x1b[1m40\x1b[0m', '\x1b[1m50\x1b[0m', '\x1b[1m60\x1b[0m', '\x1b[1m70\x1b[0m', '\x1b[1m80\x1b[0m', '\x1b[1m90\x1b[0m', '\x1b[1m100\x1b[0m'];
  const choosefloors = readline.keyInSelect(tabfloors, 'Choose the number of floors');
  console.log('Starting the game ...');
  let enter: boolean = false;
  while (!enter) {
    console.clear();
    console.log('\n                          WELCOME TO THE CASTLE OF HYRULE ');
    console.log(spriteCastle);
    const user: Player = {
      xp: 0,
      level: 1,
      gold: 12,
      inventory: [],
    };
    enter = readline.keyInYN('Would you like to enter the castle? ?');
    if (enter === true) {
      console.clear();
      start(lvl, tabfloors[choosefloors], user);
    }
  }
}

export default function startGame() {
  console.clear();
  const choosegame = readline.keyInSelect(['\x1b[4mNew Game\x1b[0m', '\x1b[4mCharacter Creation\x1b[0m', '\x1b[4mQuit\x1b[0m']);
  if (choosegame === 0) {
    console.clear();
    const difficulty = readline.keyInSelect(['\x1b[32mNormal\x1b[0m', '\x1b[33mDifficult\x1b[0m', '\x1b[31mInsane\x1b[0m'], 'Choose you difficulty');
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
  if (choosegame === 1) {
    console.clear();
    console.log('\x1b[31mYou do not have the required level for this\x1b[0m');
    const back = readline.keyInYN('Back to home screen');
    if (back === true) {
      startGame();
    } else {
      return console.log('Goodbye');
    }
  }
  return console.log('Goodbye');
}
