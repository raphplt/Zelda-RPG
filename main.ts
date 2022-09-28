import combat from './fonctions';
import { Bokoblin, Link } from './objets';

const readline = require('readline-sync');

export default function test() {
  console.log('\n                            WELCOME TO THE CASTLE OF HYRULE ');
  console.log(`
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╣▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╣╬╬╣▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╣▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▌╬╣╣▓▓╣▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╣╬╬╬╣╣╣╣╬╬▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╣╬╣╣▓╬╣╣╬╣▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╣╬╬▓███▓▓╬▓╣▓▓╣▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╣▓▓▓▓▓▓▓▓▓▓▓▓▓▓╣▓╣╬╬╣╬╬╣╬█╬╬╬╬╣╣╬╬╬╣╣▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╣▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╣╬╠╣╬╬╬╬╬╬╢╣▓╠╬╬╠╬╣▓▓╬▓▓▓▓▓▓▓▓▓▓▓╬╬▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓▓▓▓▓▓╬╣▓▓▓▓▓█╬╬▓▓▓▓▓▓▓▓▓╣╬╬╣╣╠╠╣╬╠╬╣╬╣╣╣╬╬╬╠╣╣╣╣╣╬▓▓╣╬▓▓▓▓▓▓▓▓▓▓╣╣╣╣╣╣╣▓▓▓▓▓▓▓▓
    ▓▓▓▓▓╬╬╠╣▓▓▓╬╬╬╬╣▓▓▓▓▓▓▓▓╣╣╬╬╣╣╣╣╬╣╬╬╣╣╬╣╠╠╠╠╠╠╬╬╣╠╣╬╬╬▓▓▓▓▓▓╬╣╣╠╠╠╣╬╬╣╬╣╣▓╠╬▓▓▓
    █▓▓╣╣╣╬╬╠▓▓▓▓╬╬╠╣██▓▓█▓╣╠╠╠╬╠╠╬▓▓▓╣╬╬╬╬╬╬║╠╠╬╣╬╣╬╬╬╠╠╬╠╠╬╣╣╬╣╬╬╬╣╣╬╬╣╣▓╣╬╬╣╠╠╠╣▓
    ▒╩╩╠╩╠╠╩╠╩╝╠╬╬╬╣▓▓▓▓╣╣╣╣╬╬╬╬╬╬╬╣╣╬╣╣╣╬╣╬╬╬╠╢╣▓╣╬╬╬╬▓╣╣╣╢╠╬╠╠╠╬╣╣╣╣╬╬╣╬╬╣╬╠╠╬╬╠╠╬
    ▒╩╩╩╩╩╩╠╠╠╩╣╬╣╠╬╣╣╣╣╠╬╣╬╣╬╬╣▓╬╠╣╣╣╬╣╣╬╣╣╣╬╣╣╬╣╬╬╬█╣╣╬╬╬╠╢╬╬╠╠╠╠╠╠╠╠╠╠╠╠╠╬╢╬╬╬╬╠╠
    ╩╩╩╩╠╩╩╬╠╩▒╠╬╣╬╬▓╣╬╬╬╬╣╣╬▓▓▓▓╣▓╠╠╠╠╠╠╬╬╬╬╬╬╣╬╠╢╣▓▓▓╬╬╣╣╬╬╠╬╠╬╠╢╩╩║╬╠╬╣╬╬╬╬╣╣╣╬╣╬
    ╩╩╩╩╩▒╩╣╣╣╣╣╣▓╣╣╣╬╬╬╣▓▓╬╣╬╣╣╬╣╬╩╩╬╬╬╬╬╬╬╬╬╣╬╣╬╬╣╬╣╬╣╠╬╬╬╬╣╣╬╠╬╠╠╣▓╣╣╣╬╣╣╣╣╣╣╣╬╠╬
\n`);
  const enter = readline.keyInYN('Do you want to enter in the castle ?');
  if (enter === true) {
    start();
  }
}

function start() {
  for (let i = 0; i < 10; i += 1) {
    console.log(`========= FIGHT ${i + 1}=========`);
    combat(Bokoblin, Link);

    console.log(`\nGG !\nYou complete the FIGHT ${i + 1}\n`);
    const next = readline.keyInYN('Do you want to start the second FIGHT ?');
  }
}
