//  SWITCH CASE

// 3. Convert between temperature units (Celsius, Kelvin, Fahrenheit) based on user
// choice.
// celcius = (ft-32)*5/9*
// ft = (ct*9)/5 +32.0*
// kelvin = ct + 273.03

// let choice = prompt(
//   "Choose conversion: Fahrenheit, Celsius, Kelvin"
// );

// let temp = parseFloat(prompt("Enter the temperature value:"));
// let result;

// switch (choice) {
//   case "1":
//     result = ((temp - 32) * 5) / 9;
//     console.log("Temperature in Celsius: " + result.toFixed(2));
//     break;

//   case "2":
//     result = (temp * 9) / 5 + 32.0;
//     console.log("Temperature in Fahrenheit: " + result.toFixed(2));
//     break;

//   case "3":
//     result = temp + 273.03;
//     console.log("Temperature in Kelvin: " + result.toFixed(2));
//     break;

//   default:
//     console.log("Invalid choice. Please enter 1, 2, or 3.");
// }

// 7. Print the month name corresponding to a given integer value.

// let Month= Number(prompt("Enter the month no"));
// switch (Month) {
//   case 1:
//     console.log("january");
//     break;
//   case 2:
//     console.log("feburary");
//     break;
//   case 3:
//     console.log("march");
//     break;
//   case 4:
//     console.log("april");
//     break;
//   case 5:
//     console.log("may");
//     break;
//   case 6:
//     console.log("june");
//     break;
//   case 7:
//     console.log("july");
//     break;
//   case 8:
//     console.log("august");
//     break;
//   case 9:
//     console.log("september");
//     break;
//   case 10:
//     console.log("october");
//     break;
//   case 11:
//     console.log("november");
//     break;
//   case 12:
//     console.log("december");
//     break;
// }

// 13. Build a program to check if a number is:
// - Prime
// - Automorphic (its square ends with the number itself)

// let choice = prompt("1, 2");
// let num = parseInt(prompt("Enter number:"));

// switch (choice) {
//   case "1":
//     let prime = true;
//     if (num <= 1) {
//       prime = false;
//     } else {
//       for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//           prime = false;
//           break;
//         }
//       }
//     }

//     if (prime) {
//       console.log("Prime number");
//     } else {
//       console.log("Not a prime number");
//     }
//     break;

//   case "2":
//     let sq = num * num;
//     if (sq.toString().endsWith(num.toString())) {
//       console.log("Automorphic number");
//     } else {
//       console.log("Not an Automorphic number");
//     }
//     break;

//   default:
//     console.log("Wrong choice");
// }
