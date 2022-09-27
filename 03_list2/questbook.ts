const fs = require('fs');

const commande: string = process.argv[2];

export default function displayRecipe(path: string) {
  const content = fs.readFileSync(path, 'utf-8');
  const Object = JSON.parse(content);
  console.log('=== Ongoing ===');
  for (let i = 0; i < Object.length; i += 1) {
    if (Object[i].completion_state === 0) {
      console.log(`#${Object[i].id} ${Object[i].name}`);
    }
  }
  console.log('=== Complete ===');
  for (let i2 = 0; i2 < Object.length; i2 += 1) {
    if (Object[i2].completion_state === 1) {
      console.log(`#${Object[i2].id} ${Object[i2].name}`);
    }
  }
  console.log('=== Failed ===')
  for (let i3 = 0; i3 < Object.length; i3 += 1) {
    if (Object[i3].completion_state === 2) {
      console.log(`#${Object[i3].id} ${Object[i3].name}`);
    }
  }
}

if (commande === '--list') {
  displayRecipe('./questbook.json');
}

displayRecipe('./questbook.json');
