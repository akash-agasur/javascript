// // 11. Find the largest digit in a given number.
// let num = Number(prompt("Enter a number:"));
// let maxDigit = 0;

// while (num > 0) {
//   let digit = num % 10;
//   if (digit > maxDigit) maxDigit = digit;
//   num = Math.floor(num / 10);
// }

// console.log("Largest digit is " , maxDigit);

// 14. Print a pattern of numbers from n down to 0 and back up to n.

// let n = 5;
// let i = n;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }
// i = 1;
// while (i <= n) {
//   console.log(i);
//   i++;
// }



// 17. Check if a number is prime (optimized method).

// let num = Number(prompt("Enter a number:"));
// let i = 2;

// while (i < num && num % i !== 0) {
//   i++;
// }

// if (num > 1 && i === num) {
//   console.log("Prime");
// } else {
//   console.log("Not Prime");
// }