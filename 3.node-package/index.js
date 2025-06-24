const lodash = require('lodash');


const names = ['Alice', 'Bob', 'Charlie', 'David'];
const shuffledNames = lodash.shuffle(names);
console.log('Shuffled Names:', shuffledNames);