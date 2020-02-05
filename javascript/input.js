// Syntax  for console and file input

// Synchronous calls - wait for a result, stuck until it arrives
// Asynchronous calls - dont wait for a result, handle the result whenever it arrives

const readline = require('readline');
const fs = require('fs');

// console configuration
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// console input
user.question('Enter a filename: ', function(filename) {
  console.log(filename);
  // this part is after the console input
  const file = readline.createInterface({
    input: fs.createReadStream(filename)
  });

  // Asynchronous line by line input
  file.on('line', function(line) {
    console.log(line);
  });

  // End the program when the file closes
  file.on('close', function() {
    process.exit(0);
  });
});
