 // Objects and array

// Object literal -- basically like a python dictionary with methods
const point = {x: 1, y: 2};
console.log(point);

// Accessing properties
console.log(point.x);

// Changing properties
point.x = 3;

// Nested Object literal
const circle = {
  center: point,
  radues: 4
};

// Access subpropereties
console.log(circle.center.x);

// Undefined properties
console.log(circle.color);

// adding properties
circle.color = 'blue';
console.log(circle);
