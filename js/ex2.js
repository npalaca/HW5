const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// a. An array of odd numbers
const oddArr = arr.filter(num => num % 2 !== 0);
console.log(oddArr); // [1, 3, 5, 7, 9]

// b. An array of numbers divisible by 2 or 5
const divArr = arr.filter(num => num % 2 === 0 || num % 5 === 0);
console.log(divArr); // [2, 4, 5, 6, 8, 10]

// c. An array of numbers divisible by 3, squared
const squareArr = arr.filter(num => num % 3 === 0).map(num => num ** 2);
console.log(squareArr); // [9, 36, 81]

// d. The sum of the following: square the numbers divisible by 5
const sum = arr.filter(num => num % 5 === 0).reduce((acc, num) => acc + num ** 2, 0);
console.log(sum); // 105

