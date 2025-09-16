// generate-image-list.js
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public/images/slideshow');
const outputFile = path.join(__dirname, 'src/slideshow-images.json');

const exts = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

const files = fs.readdirSync(imagesDir)
  .filter(f => exts.includes(path.extname(f).toLowerCase()));

fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));
console.log(`Wrote ${files.length} images to ${outputFile}`);
