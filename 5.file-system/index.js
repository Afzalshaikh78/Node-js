const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log('Data folder created');
}


const filePath = path.join(dataFolder, 'file.txt');

fs.writeFileSync(filePath, 'hello from file')
console.log('file created')



const fileContent = fs.readFileSync(filePath, 'utf8');
console.log('File content:', fileContent);

fs.appendFileSync(filePath, '\nappended text');
console.log('Text appended to file');


//asychronuos version

const asyncFilePath = path.join(dataFolder, 'asyncFile.txt');
fs.writeFile(asyncFilePath, 'hello from async file', (err) => {
  if (err) {
    console.error('Error creating async file:', err);
    return;
  }
  console.log('Async file created');

  fs.readFile(asyncFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading async file:', err);
      return;
    }
    console.log('Async file content:', data);
  })

  fs.appendFile(asyncFilePath, '\nappended text to async file', (err) => {
    if (err) {
      console.error('Error appending to async file:', err);
      return;
    }
    console.log('Text appended to async file');

    fs.readFile(asyncFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading async file after append:', err);
        return;
      }
      console.log('Async file content after append:', data);
    });
  });
})

