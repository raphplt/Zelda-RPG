/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-param-reassign */
import rs = require('readline-sync');
import CharStats from './instances';
import { playerHP } from './main';

export let death : boolean = false;

export function combat(enemy : CharStats, hero: CharStats) {
  const maxHP : number = playerHP;
  const halfMaxHp : number = (maxHP / 2);
  console.log(`\x1b[0;31m${enemy.name}\x1b[0m has \x1b[0;31m${enemy.hp}\x1b[0m hp.`);
  let EnemyHearts : string = '';
  for (let a : number = 0; a < (enemy.hp / 10); a += 1) {
    EnemyHearts += '❤️';
  }
  console.log(`HP : ${EnemyHearts}`);

  console.log(`\x1b[0;32mYou\x1b[0m have \x1b[0;32m${hero.hp}\x1b[0m hp.`);
  let HeroHearts : string = '';
  for (let a : number = 0; a < (hero.hp / 10); a += 1) {
    HeroHearts += '❤️';
  }
  console.log(`HP : ${HeroHearts}`);
  let enemyHp : number = enemy.hp;

  while (enemyHp > 0) {
    const action = rs.keyInSelect(['Attack', 'Heal'], 'What do you want to do?');

    if (action === 0) {
      console.log(`\n\x1b[0;31mYou\x1b[0m inflicted \x1b[0;31m${hero.str}\x1b[0m damage on the enemy`);
      if (hero.str < enemyHp) {
        enemyHp -= hero.str;
      } else {
        enemyHp = 0;
      }
      console.log(`\x1b[0;31m${enemy.name}\x1b[0m has now \x1b[0;31m${enemyHp}\x1b[0m hp.`);
      if (enemyHp > 0) {
        hero.hp -= enemy.str;
        console.log(`\x1b[0;31m${enemy.name}\x1b[0m attacks you, \x1b[0;32myou\x1b[0m have \x1b[0;32m${hero.hp}\x1b[0m hp remaining.`);
      }
      if (hero.hp <= 0) {
        console.log('You die. Try again');
        death = true;
        return;
      }
    }

    if (action === 1) {
      if (hero.hp <= halfMaxHp) {
        hero.hp += halfMaxHp;
        hero.hp -= enemy.str;
        console.log(`You have restored yourself ${Math.floor(halfMaxHp)}hp`);
        console.log(`You have curently ${hero.hp} hp.`);
      } else {
        hero.hp = maxHP;
        hero.hp -= enemy.str;
        console.log('You have restored all your HP.');
      }
      console.log(`\x1b[0;31m${enemy.name}\x1b[0m attacks you, \x1b[0;32myou\x1b[0m have \x1b[0;32m${hero.hp}\x1b[0m hp remaining.`);
      if (hero.hp <= 0) {
        console.log('You die. Try again');
        death = true;
        return;
      }
    }

    if (action === 2) {
      console.log("You can't escape, fight.");
    }
  }
  console.log(`You have ${hero.hp} hp left.`);
}
