// Expression syntax in JavaScript

// Booleans
true
false

// Logic
!false
true && false
true || false

// Numbers (all one type)
3.14

// Equality
3 === 3.0

// Ordering
3 > 2
3 >= 2
2 < 3
2 <= 3

// Strings
'hello'

// Concatenation
'a' + 'b' === 'ab'

// Arithmetic
3 + 2 === 5
3 - 2 === 1
3 * 2 === 6
3 / 2 ===1.5
3 % 2 === 1
3 ** 1 === 9

// Type coercion
'3' + 2 === '32'
'3' + true === '3true'
'3' - 2 === 1
3 + true === 4

// loose Equality
'3' == 3
true == 1
false == 0
false == ''
'' == 0

// without template strings
'3+2 is ' + (3+2) // 3+2 is 5
'3+2 is ' + 3+2  // 3+2 is 32

// Template Strings
`3+2 is ${3+2}`  // 3+2 is 5

// while loop
let x = 0;
while (x < 3){
  console.log(x);
  x += 1;
}

// for loop
for (let x = 0; x < 3; x++){
  console.log(x);
}

// conditional
if (x === 3){
  console.log('x is now 3');
}else{
  console.log('x is now ${x}');
}
