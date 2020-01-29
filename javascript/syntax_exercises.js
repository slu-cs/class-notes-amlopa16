// Exercise 1
let sum = 0;
for (let i = 0; i <= 10; i++){
  sum = sum + (i*i);
}
console.log(sum);

// Exercise 2 - first fibonacci # greater than 1000
let fibs = [0, 1];
for (let y = 0; y <= 1000; y++){
  fibs.push(fibs[y-2]+fibs[y-1]);
  if (fibs.last() >= 1000){
    console.log(fibs.last());
  }
}

// Exercise 3
for (let x = 0; x <= 100; x++){
  if (x%3 === 0 && x%5 !=== 0){
    console.log(x);
  }
  if (x%5 === 0 && x%3 !=== 0){
    console.log(x);
  }
}

// Exercise 4
let smallest_int = 0;
while (true){
  let vals = [];
  smallest_int += 1;
  for (let j = 0; j <= 10; j++){
    if (smallest_int%j === 0){
      vals.push(true);
    }
  }
  if (vals.length() === 10){
    console.log(smallest_int);
    break;
  }
}
