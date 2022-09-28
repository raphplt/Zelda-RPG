import rs = require('readline-sync');
import { Bokoblin, Link } from './objets';
import CharStats from './instances';

export default function combat(enemy : CharStats, hero: CharStats) {
  console.log(`\x1b[0;31m${enemy.name}\x1b[0m has \x1b[0;31m${enemy.hp}\x1b[0m hp.`);
  console.log(`\x1b[0;32mYou\x1b[0m have \x1b[0;32m${hero.hp}\x1b[0m hp.`);
  let enemyHp : number = enemy.hp;
  while (enemyHp > 0) {
    const action = rs.keyInSelect(['Attack', 'Heal'], 'What do you want to do?');
    if (action === 0) {
      enemyHp -= hero.strength;
      console.log(`\n\x1b[0;31m${enemy.name}\x1b[0m has \x1b[0;31m${enemy.hp}\x1b[0m hp.`);
      if (enemyHp > 0) {
        hero.hp -= enemy.strength;
        console.log(`\x1b[0;31m${enemy.name}\x1b[0m attacks you, \x1b[0;32myou\x1b[0m have \x1b[0;32m${hero.hp}\x1b[0m hp remaining.`);
      }
    } if (action === 1) {
      console.log('You have no potion remaining.');
    } if (action === 2) {
      console.log("You can't escape, fight.");
    }
    if (hero.hp <= 0) {
      console.log('You die. Try again');
      return;
    }
  }
  console.log(hero.hp);
}
