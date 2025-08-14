// 1.Function Declaration: Write a function calculateFactorial(n) that calculates the
//  factorial of a number using a while loop. Test it with numbers 5, 7, and 0.

// function calculateFactorial(n) {
//   let result = 1;
//   let i = n;

//   while (i > 1) {
//     result = result * i;
//     i = i - 1;
//   }
//   return result;
// }
// console.log(calculateFactorial(5)); 

// 4.Arrow Function with One Parameter: Create an arrow function countEvenDigits that
//  takes a number and counts how many even digits it contains using a loop.
     

// const countEvenDigits = (num) => {
//   let count = 0;

//   if (num < 0) {
//   }
//   while (num > 0) {
//     let digit = num % 10;
//     if (digit % 2 === 0) {
//       count = count + 1;
//     }
//     num = Math.floor(num / 10);
//   }
//   return count;
// };
// console.log(countEvenDigits(123456679));  



// 7.Hoisting: Write a program that demonstrates hoisting by calling a function 
// multiplicationTable(n) before its declaration, where the function prints the 
// multiplication table of n from 1 to 10.
   

// multiplicationTable(3);
// function multiplicationTable(n) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(n , " x " , i , " = " , (n * i));
//   }
// }


// 10.Callback Function: Create a function processNumbers that takes an array and a 
// callback, then calls the callback for each number that is a perfect square (use loop\
//  to check perfect squares).


// function processNumbers(arr, callback) {
//   for (let num of arr) {
//     for (let i = 1; i * i <= num; i++) {
//       if (i * i === num) {
//         callback(num);
//         break;
//       }
//     }
//   }
// }
// function show(num) {
//   console.log(num , "  perfect square");
// }
// processNumbers([1, 12, 4, 7, 6], show);

//13. Impure Function: Create an impure function numberAnalyzer that takes a number, modifies a global counter variable, and prints analysis (even/odd, prime/composite) using if-else conditions.

// let counter = 0;

// function isPrime(n) {
//   if (n <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// function numberAnalyzer(number) {
//   counter++;

//   if (number % 2 === 0) {
//     console.log(number + " is Even.");
//   } else {
//     console.log(number + " is Odd.");
//   }

//   if (number <= 1) {
//     console.log(number + " is neither Prime nor Composite.");
//   } else if (isPrime(number)) {
//     console.log(number + " is Prime.");
//   } else {
//     console.log(number + " is Composite.");
//   }

//   console.log("Analysis count: " + counter);
// }

// numberAnalyzer(3);
// numberAnalyzer(8);



// 16.Arrow Function with Array Processing: Create an arrow function filterAndTransform
//  that takes an array of numbers and returns a new array containing only numbers
//  between 10-100, but squared, using a for loop with if-else conditions.

// const filterAndTransform = (arr) => {
//   let result = [];
//   for (let num of arr) {
//     if (num >= 10 && num <= 100) {
//       result.push(num * num);
//     }
//   }
//   return result;
// };
// console.log(filterAndTransform([5, 10, 50, 100, 101]));
