import rs = require('readline-sync');
import CharStats from './instances';
import { Ganon } from './objets';

export default function combat(enemy : CharStats, hero: CharStats) {
  console.log(`\x1b[0;31m${enemy.name}\x1b[0m has \x1b[0;31m${enemy.hp}\x1b[0m hp.`);
  console.log(`\x1b[0;32mYou\x1b[0m have \x1b[0;32m${hero.hp}\x1b[0m hp.`);
  let enemyHp : number = enemy.hp;
  while (enemyHp > 0) {
    const action = rs.keyInSelect(['Attack', 'Heal'], 'What do you want to do?');
    if (action === 0) {
      console.log(`\n\x1b[0;31mYou\x1b[0m inflicted \x1b[0;31m${hero.strength}\x1b[0m damage on the enemy`);
      enemyHp -= hero.strength;
      console.log(`\x1b[0;31m${enemy.name}\x1b[0m has \x1b[0;31m${enemyHp}\x1b[0m hp.`);
      if (enemyHp > 0) {
        hero.hp -= enemy.strength;
        console.log(`\x1b[0;31m${enemy.name}\x1b[0m attacks you, \x1b[0;32myou\x1b[0m have \x1b[0;32m${hero.hp}\x1b[0m hp remaining.`);
      }
    } if (action === 1) {
      if (hero.hp < 30) {
        hero.hp += 30;
        console.log('You have restored yourself 30hp');
        console.log(`You have curently ${hero.hp} hp.`);
      } else {
        hero.hp = 60;
        console.log('You have restored all your HP.');
      }
      hero.hp -= enemy.strength;
      console.log(`\x1b[0;31m${enemy.name}\x1b[0m attacks you, \x1b[0;32myou\x1b[0m have \x1b[0;32m${hero.hp}\x1b[0m hp remaining.`);
    } if (action === 2) {
      console.log("You can't escape, fight.");
    }
    if (hero.hp <= 0) {
      console.log('You die. Try again');
      return;
    }
  }
  if (enemy.name === 'Ganon') {
    console.log('You win the game GG !');
  } else {
    console.log(`You have ${hero.hp} hp left.`);
  }
}
