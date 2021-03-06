// Function Syntax

//Function definition
const avg = function(a, b) {
  return (a + b) / 2;
};

// Function call
console.log(avg(3, 5));

const print = function(a, b) {
  console.log(`a=${a}, b=${b}`);
};

// Undefined values
const result = print(7, 8);
console.log(result);
print(9);
print();

// Object literal with a method
const rectangle = {
  width: 10,
  height: 20,
  area: function() {
    return this.width * this.height;
  }
};

// Method call
console.log(rectangle.area());

// Constructor definition
const Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
};

// Constructing Objects
const small = new Rectangle(1, 2);
const large = new Rectangle(10, 20);

// Shared method
Rectangle.prototype.area = function() {
  return this.width * this.height;
};

// Method calls
console.log(small.area());
console.log(large.area())
