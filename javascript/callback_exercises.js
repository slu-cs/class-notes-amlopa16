// Question 1

const filter = function (array){
  for (let i = 0; i < array.length; i++){
    array[i] = array[i] % 2;
  }
}

const numbers = [1, 2, 3, 4, 5];
const odds = filter(numbers, x => x%2 > 0);

// Question 2
