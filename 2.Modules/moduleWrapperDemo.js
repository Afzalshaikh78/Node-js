const moduleWrapper = require('./moduleWrapper');

console.log('filename:', __filename);
console.log('dirname:', __dirname);


moduleWrapper.greet('World'); // Output: Hello, World!