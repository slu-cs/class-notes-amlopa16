// Syntax  for console and file input

// Synchronous calls - wait for a result, stuck until it arrives
// Asynchronous calls - dont wait for a result, handle the result whenever it arrives

const readline = require('readline');

// console configuration
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// console input
user.question('Enter a filename: ', function(filename) {
  console.log(filename);
});

// This part isnt after the console input
console.log('here');
