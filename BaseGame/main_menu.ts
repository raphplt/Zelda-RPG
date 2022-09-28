import readline = require('readline-sync');
import test from './main';

function start() {
  const choose = readline.keyInYN('Start game ?');
  if (choose === true) {
    console.log('Starting the game ...');
    return (test());
  } if (choose === false) {
    return console.log('Goodbye');
  }
}

start();
