const fs = require("fs");

// const promise = new Promise((resolve, reject) => {
//   fs.readFile('file.txt', 'utf8', (err, data) => {
//     if (err) {
//       reject(err);
//     }
//     resolve(data);
//   });
// });

// promise.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.error('Error reading file:', err);
// })


// function person(name, callback) {
//   console.log(`hello ${name}`)
//   callback();
// }


// function address() {
//   console.log('hello address')


// }

// person('John', address);



// async function readFileAsync() {
//   try {
//     const data = await fs.promises.readFile('file.txt', 'utf8');
//     console.log(data);
//   } catch (err) {
//     console.error('Error reading file:', err);
//   }
// }

// readFileAsync();

// async function readFile() {
//   try {
//     const data = await fs.promises.readFile('file.txt', 'utf8');
//     console.log(data);
//   } catch (error) {
//     console.error('Error reading file:', error);
//   }
// }

// readFile();

// function wait(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`⏱️ Waited ${ms} milliseconds`);
//     }, ms);
//   });
// }

// async function doSteps() {
//   console.log("Step 1: Starting");

//   const result1 = await wait(1000); // wait 1 second
//   console.log("Step 2:", result1);

//   const result2 = await wait(2000); // wait 2 seconds
//   console.log("Step 3:", result2);

//   console.log("Step 4: All done 🎉");
// }

// doSteps();


async function readFile() {
  try {
    const data = await fs.promises.readFile('file.txt', 'utf8');
    console.log(data);
    
  } catch (error) {
    console.error('Error reading file:', error);
    
  }
}

readFile();