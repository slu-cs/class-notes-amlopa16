// Syntax for callbacks

// This function uses another function to transform an argument
const map = function(array, transform){
  const copy = [];
  for (const element of array){
    copy.push(transform(element));
  }
  return copy;
}

// This fucntion can be used as the transform
const square = function(x){
  return x**2;
}

// We'll use this as the original array
const numbers = [1, 2, 3, 4, 5];

// Doing the transformation
map(numbers, square);

console.log(map(numbers, square));
console.log(numbers);

// Defining other transforms with arrow function
console.log(map(numbers, x => x**2));
console.log(map(numbers, x => x + 1));

// Using the array map method (built in map function)
console.log(numbers.map(x => x**2));
