const fs = require('fs');

const commande: string = process.argv[2];

export default function displayRecipe(path: string) {
  const content = fs.readFileSync(path, 'utf-8');
  const Object = JSON.parse(content);

  for (let i = 0; i < Object.length; i += 1) {
    console.log(`#${Object[i].id} ${Object[i].name}`);
  }
}

if (commande === '--list') {
  displayRecipe('./questbook.json');
}

displayRecipe('./questbook.json');
