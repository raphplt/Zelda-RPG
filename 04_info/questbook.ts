const fs = require('fs');

const num: number = parseInt(process.argv[2], 10);
const command = process.argv[3];

export default function displayRecipe(path: string) {
  const content = fs.readFileSync(path, 'utf-8');
  const obj = JSON.parse(content);
  console.log('========================================');
  console.log(`#${num} ${obj[num - 1].name}`);
  console.log('========================================');
  console.log(`Given by ${obj[num - 1].quest_giver}`);
  console.log(`Completed since the ${obj[num - 1].end_date}`);
  console.log('========================================');
  console.log(`Goal: ${obj[num - 1].description}`);
  if (obj[num - 1].Reward === '') {
    console.log('Reward: ---');
  } else {
    console.log(`Reward: ${obj[num - 1].Reward}`);
  }
}
if (command
   === '--info') {
  displayRecipe('./questbook.json');
}

displayRecipe('./questbook.json');
