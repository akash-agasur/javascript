//printing 1 to 10 numbers
// for (let i = 2; i <= 10; i++) {
//   console.log(i);
// }

//Multiplication Table

//  let userNumber = Number(prompt("Enter the number:"))

// for (let i = 1; i < 11; i++) {
//   let multiplication = userNumber * i;
//   // console.log(userNumber, " * ", i, " = ", multiplication);
//   //Template Literals
//   console.log(${userNumber} * ${i} = ${multiplication});
// }

// console.log("Code Subtle's countdown:");
// for (let i = 10; i >= 1; i--) {
//   console.log(Code Subtle counts: ${i});
// }

// //Check the factorial of the number
// let num = Number(prompt("enter a number"));
// let fact = 1;
// for (let i = 1; i <= num; i++) {
//   fact = fact * i ;
//   console.log(fact);//5//10//30//120
// }

//1*2 + 2*3 + 3*4 + 4*5 + 5*6
// let num = Number(prompt("enter a number"));//6
// let sum =0;
// for (let i = num; i>0; i--) {
//   sum += i*(i-1)
//   console.log(sum);//30//50//62//68//70
// }

//10*8 + 8*6 + 6*4 + 4*2
// let num = Number(prompt("enter a number"));//10
// let sum = 0;
// for (let i = num; i > 0; i=i-2) {
//   sum += (i) * (i - 2);
//   console.log(sum); //80 //128 //152 //160
// }

//1-3+3-5+5-7+7-9+9-11

// let num = Number(prompt("Enter a number "));
// let sum = 0;
// let sub = 0;
// for (let i = 1; i <= num; i += 2) {
//   sub = i - (i + 2);
//   sum = sum + sub;
//   console.log("sub val is:", sub);
//   console.log("sum val is", sum);
// }
