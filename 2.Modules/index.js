

const firstModule = require('./firstModule');

// console.log(firstModule.add(5, 3));        // Output: 8
// console.log(firstModule.subtract(5, 3));   // Output: 2


try {
  console.log('trying to divide by zero');
  console.log(firstModule.divide(5, 0));    // This will throw an error
} catch (error) {
  console.error('error caurght:', error.message);
}