const path = require('path');
 
// console.log('Current directory:', path.dirname(__filename));

// console.log('File name:', path.basename(__filename));

// console.log('File extension:', path.extname(__filename));

// const pathJoined = path.join(__dirname, 'subdir', 'file.txt');
// console.log('Joined path:', pathJoined);

// const resolvedPath = path.resolve('subdir', 'file.txt');
// console.log('Resolved path:', resolvedPath);

// const normalizedPath = path.normalize('/foo/bar//baz/asdf/quux/..');
// console.log('Normalized path:', normalizedPath);


const filePath = path.join(__dirname, 'subdir', 'file.txt');
console.log('File path:', filePath);
console.log('File name:', path.basename(filePath));
console.log('Directory name:', path.dirname(filePath));
console.log('File extension:', path.extname(filePath));