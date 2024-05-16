const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination, { recursive: true });
}

const processImage = (imagePath, width, suffix) => {
  const { name, ext } = path.parse(imagePath);
  const outputFilename = `${name}-${suffix}${ext}`;
  return sharp(imagePath)
    .resize(width)
    .toFile(path.resolve(destination, outputFilename));
};

fs.readdirSync(target)
  .filter((file) => file.startsWith('hero-image_2') && /\.(jpe?g|png)$/.test(file))
  .forEach((image) => {
    const imagePath = path.resolve(target, image);
    processImage(imagePath, 800, 'large');
    processImage(imagePath, 480, 'small');
  });
