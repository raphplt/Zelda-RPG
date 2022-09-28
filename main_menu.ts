import test from './main';

const readline = require('readline-sync');

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
