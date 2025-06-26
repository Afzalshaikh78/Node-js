const fs = require('fs');
const path = require('path');


const dataFolder = path.join(__dirname, 'data');

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log('Data folder created');
}

const filePath = path.join(dataFolder, 'hello.txt')
const newPath = path.join(dataFolder, 'newFile.txt');

fs.writeFile(filePath, 'hello backend dev', (err) => {
  if (err) throw err;
  console.log('File created successfully');

  fs.appendFile(filePath, '\nappended text', (err) => {
    if (err) throw err;
    console.log('Text appended successfully');

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      console.log('File content:', data);

      fs.rename(filePath, newPath, (err) => {
        if (err) throw err;
        console.log('File renamed successfully');


        fs.unlink(newPath, (err) => {
          if (err) {
            console.error('Error deleting file:', err);
            return;
          }
          console.log('File deleted successfully');
        });
      });
    });
  });
})