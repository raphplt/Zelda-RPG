const readline = require('readline-sync');

function start() {
  const choose = readline.keyInYN('Start game ?');
  if (choose === true) {
    main.ts();
  }
}
start();
