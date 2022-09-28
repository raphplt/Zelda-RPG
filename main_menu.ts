<<<<<<< HEAD
import test from './main';

=======
>>>>>>> 0440746de1880f6e0a217e0cdc8c985e65119c00
const readline = require('readline-sync');

function start() {
  const choose = readline.keyInYN('Start game ?');
  if (choose === true) {
<<<<<<< HEAD
    console.log('Starting the game ...');
    return (test());
  } if (choose === false) {
    return console.log('Goodbye');
=======
    main.ts();
>>>>>>> 0440746de1880f6e0a217e0cdc8c985e65119c00
  }
}
start();
