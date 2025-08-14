// Question 10:
// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1  

// for (let i = 1; i <= 5; i++) {
//   let line = "";
//   for (let j = 5; j >= 6 - i; j--) {
//     line =line+j + " ";
//   }
//   console.log(line.trim());
// }

// Question 13:
// E
// D E
// C D E
// B C D E
// A B C D E

// for (let i = 0; i < 5; i++) {
//   let line = "";
//   for (let j = 69 - i; j <= 69; j++) {
//     line =line+String.fromCharCode(j) + " ";
//   }
//   console.log(line);
// }


// Question 16:
// *****
//  ****
//   ***
//    **
//     *


// for (let i = 5; i >= 1; i--) {
//   let spaces = " ".repeat(5-i);
//   let stars = "* ".repeat(i); // repeat stars with space, then trim end
//   console.log(spaces + stars);
// }



// Question 19:
//     A
//    AB
//   ABC
//  ABCD
// ABCDE

// for (let i = 1; i <= 5; i++) {
//   for (let k = 5; k > i; k--) {
//     process.stdout.write(" ");
//   }
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(64 + j));   }
//   console.log();
// }

// Question 22:
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *


// // Top half including the middle line
// for (let i = 1; i <= 5; i++) {
//   // Print spaces
//   for (let space = 1; space <= 5 - i; space++) {
//     process.stdout.write(" ");
//   }
//   // Print numbers from 1 to i
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + " ");
//   }
//   process.stdout.write("\n");
// }

// // Bottom half
// for (let i = 4; i >= 1; i--) {
//   // Print spaces
//   for (let space = 1; space <= 5 - i; space++) {
//     process.stdout.write(" ");
//   }
//   // Print numbers from 1 to i
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + " ");
//   }
//   process.stdout.write("\n");
// }


// Question 25:
// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1


// for (let i = 1; i <= 5; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += (j % 2) + " ";
//   }
//   console.log(line.trim());
// }
  

// Question 31:
// * * * * *
// * *   * *
// *   *   *
// * *   * *
// * * * * *


// for (let i = 0; i < 5; i++) {
//   let line = "";
//   for (let j = 0; j < 5; j++) {
//     if (i === 0 || i === 4 || j === 0 || j === 4 || i === j || i + j === 4) {
//       line += "* ";
//     } else {
//       line += "  ";
//     }
//   }
//   console.log(line);
// }
  

// Question 28:
//     D
//    C C
//   B B B
//  A A A A
//   B B B
//    C C
//     D


  
// let chars = ["D", "C", "B", "A", "B", "C", "D"];

// for (let i = 0; i < chars.length; i++) {
//   let spaces = " ".repeat(Math.abs(3 - i));
//   let line = (chars[i] + " ").repeat(4 - Math.abs(3 - i)).trim();
//   console.log(spaces + line);
// }
