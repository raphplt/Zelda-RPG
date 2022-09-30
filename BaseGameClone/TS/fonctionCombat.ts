/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-param-reassign */
import rs = require('readline-sync');
import { dispayChar, parseClass, parseRaces } from './basic_characteristics';
import CharStats from './instances';
import { playerHP } from './main';
import { spritelink } from './sprites';

export let death : boolean = false;

function Heart(char : CharStats) {
  let hearts : string = '';
  for (let a : number = 0; a < char.hp; a += 1) {
    hearts += '❤️';
  }
  console.log(`HP : ${hearts}`);
}

function HeartH(hp: number) {
  let hearts : string = '';
  for (let a : number = 0; a < hp; a += 1) {
    hearts += '❤️';
  }
  console.log(`HP : ${hearts}`);
}
export function combat(enemy : CharStats, hero: CharStats) {
  let dmgModifE : number = 1;
  let dmgModifP : number = 1;
  for (let a : number = 0; a < parseClass[hero.class].weaknesses.length; a += 1) {
    if (parseClass[hero.class].weaknesses[a] === enemy.id) {
      dmgModifP /= 2;
    }
  }
  for (let a : number = 0; a < parseClass[enemy.class].weaknesses.length; a += 1) {
    if (parseClass[enemy.class].weaknesses[a] === hero.id) {
      dmgModifE /= 2;
    }
  }
  for (let a : number = 0; a < parseRaces[hero.race].weaknesses.length; a += 1) {
    if (parseRaces[hero.class].weaknesses[a] === enemy.id) {
      dmgModifP /= 2;
    }
  }
  for (let a : number = 0; a < parseRaces[enemy.race].weaknesses.length; a += 1) {
    if (parseRaces[enemy.class].weaknesses[a] === hero.id) {
      dmgModifE /= 2;
    }
  }

  for (let a : number = 0; a < parseClass[hero.class].strengths.length; a += 1) {
    if (parseClass[hero.class].strengths[a] === enemy.id) {
      dmgModifE *= 2;
    }
  }
  for (let a : number = 0; a < parseClass[enemy.class].strengths.length; a += 1) {
    if (parseClass[enemy.class].strengths[a] === hero.id) {
      dmgModifP *= 2;
    }
  }
  for (let a : number = 0; a < parseRaces[hero.class].strengths.length; a += 1) {
    if (parseRaces[hero.class].strengths[a] === enemy.id) {
      dmgModifE *= 2;
    }
  }
  for (let a : number = 0; a < parseRaces[enemy.race].strengths.length; a += 1) {
    if (parseRaces[enemy.class].strengths[a] === hero.id) {
      dmgModifP *= 2;
    }
  }
  const maxHP : number = playerHP;
  const halfMaxHp : number = (maxHP / 2);
  console.log(`\x1b[0;31m${enemy.name}\x1b[0m has \x1b[0;31m${enemy.hp}\x1b[0m hp.`);
  Heart(enemy);
  console.log(`\x1b[0;32mYou\x1b[0m have \x1b[0;32m${hero.hp}\x1b[0m hp.`);
  Heart(hero);
  let enemyHp : number = enemy.hp;
  while (enemyHp > 0) {
    const action = rs.keyInSelect(['🗡️ Attack', '❤️ Heal', '🏃Escape', '🛡️ Proctect', '🧝Character'], 'What do you want to do?');

    if (action === 0) {
      console.clear();
      console.log(`\n\x1b[0;31mYou\x1b[0m inflicted \x1b[0;31m${Math.floor(hero.str)}\x1b[0m damage on the enemy`);
      if (hero.str < enemyHp) {
        enemyHp -= hero.str * dmgModifP;
      } else {
        enemyHp = 0;
      }
      console.log(`\x1b[0;31m${enemy.name}\x1b[0m has now \x1b[0;31m${Math.floor(enemyHp)}\x1b[0m hp.`);
      HeartH(enemyHp);
      if (enemyHp > 0) {
        if (enemy.str < hero.hp) {
          hero.hp -= enemy.str * dmgModifE;
        } else {
          hero.hp = 0;
        }
        console.log(`\x1b[0;31m${enemy.name}\x1b[0m attacks you, \x1b[0;32myou\x1b[0m have \x1b[0;32m${Math.floor(hero.hp)}\x1b[0m hp remaining.`);
        Heart(hero);
      }
      if (hero.hp <= 0) {
        console.log(spritelink);
        console.log('You die. Try again');
        death = true;
        return;
      }
    }

    if (action === 1) {
      console.clear();
      if (hero.hp <= halfMaxHp) {
        hero.hp += halfMaxHp;
        hero.hp -= enemy.str * dmgModifE;
        console.log(`You have restored yourself ${Math.floor(halfMaxHp)}hp`);
        console.log(`You have curently ${hero.hp} hp.`);
      } else {
        hero.hp = maxHP;
        hero.hp -= enemy.str * dmgModifE;
        console.log('You have restored all your HP.');
      }
      Heart(hero);
      if (hero.hp <= 0) {
        hero.hp = 0;
        console.log(`\x1b[0;31m${enemy.name}\x1b[0m attacks you, \x1b[0;32myou\x1b[0m have \x1b[0;32m${Math.ceil(hero.hp)}\x1b[0m hp remaining.`);
        console.log(spritelink);
        console.log('You die. Try again');
        death = true;
        return;
      }
      console.log(`\x1b[0;31m${enemy.name}\x1b[0m attacks you, \x1b[0;32myou\x1b[0m have \x1b[0;32m${Math.ceil(hero.hp)}\x1b[0m hp remaining.`);
    }
    if (action === 5) {
      console.clear();
      death = true;
      console.log('You can\'t escape, fight.');
    }
    if (action === 3) {
      hero.hp -= enemy.str;
      console.log(`\x1b[0;31m${enemy.name}\x1b[0m attacks you, but you only suffer half the damage, \x1b[0;32myou\x1b[0m have \x1b[0;32m${Math.ceil(hero.hp)}\x1b[0m hp remaining.`);
      Heart(hero);
      if (hero.hp <= 0) {
        console.log(spritelink);
        console.log('You die. Try again');
        death = true;
        return;
      }
    }
    if (action === 4) {
      console.clear();
      dispayChar(hero);
    }
  }
  console.log(`You have ${Math.ceil(hero.hp)} hp left.`);
  Heart(hero);
}
