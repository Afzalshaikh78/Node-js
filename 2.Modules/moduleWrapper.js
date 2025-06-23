console.log('moduleWrapper.js loaded');


console.log('filename:', __filename);
console.log('dirname:', __dirname);


module.exports.greet = function(name) {
  console.log( `Hello, ${name}!`);
}

