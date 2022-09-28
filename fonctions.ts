import { Bokoblin, Link } from './objets';
import CharStats from './instances';

const rs = require('readline-sync');

export default function combat(enemy : CharStats, hero: CharStats) {
  console.log(`${enemy.name} has ${enemy.hp} hp.`);
  console.log(`You have ${hero.hp} hp.`);
  let enemyHp : number = enemy.hp;
  while (enemyHp > 0) {
    const action = rs.keyInSelect(['Attack', 'Heal'], 'What do you want to do?');
    if (action === 0) {
      enemyHp -= hero.strength;
      console.log(`${enemy.name} has ${enemyHp} hp.`);
      if (enemyHp > 0) {
        hero.hp -= enemy.strength;
        console.log(`${enemy.name} attacks you, you have ${hero.hp} hp remaining.`);
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
combat(Bokoblin, Link);
