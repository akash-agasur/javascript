// 1. Generate a multiplication table for a given number.
//Multiplication Table

//  let userNumber = Number(prompt("Enter the number:"))

// for (let i = 1; i < 11; i++) {
//   let multiplication = userNumber * i;
//   console.log(userNumber, " * ", i, " = ", multiplication);
// //   Template Literals
//   console.log(${userNumber} * ${i} = ${multiplication});
// }


// 2. Print numbers from 1 to 10.
// printing 1 to 10 numbers
// for (let i = 2; i <= 10; i++) {
//   console.log(i);
// }


// 3. Calculate sum of series: 1×2 + 2×3 + 3×4 + ... + 9×10

// 1*2 + 2*3 + 3*4 + 4*5 + 5*6
// let num = Number(prompt("enter a number"));//6
// let sum =0;
// for (let i = num; i>0; i--) {
//   sum += i*(i-1)
//   console.log(sum);//30//50//62//68//70
// }

// 4. Calculate sum of series: 1×2 + 3×4 + 5×6 + ... + 11×12

// let sum = 0;
// let multi = 1

// for (let i = 1; i <= 12; i=i+2) {
//   multi = i * (i + 1)
//   sum= sum + multi
//   console.log(sum);
// }

// 5. Calculate sum of series: 1×3 + 2×4 + 3×5 + ... + 9×11

//  let num = Number(prompt("Enter a number "));
// let sum = 0;
// let multi = 0;
// for (let i = 1; i <= num; i++) {
//   multi = i * (i + 2);
//   sum = sum + multi;
//   console.log("sub multi val is:", multi);
//   console.log("sum sum val is", sum);
// }

//6. Calculate sum of alternating series: 1-2 + 3-4 + 5-6 + ... + 9-10

// let sub = 0;
// let sum = 0;

// for (let i = 1; i <= 10; i=i+2) {
//   sub = i - (i + 1);
//   sum += sub;
//   console.log(sum);
// }


// 7. Find all factors of a given number.

// let num = Number(prompt("Enter the number"));
// let factors;

// for (let i = 2; i <= num; i++) {
//   if (num % i == 0) {
//     factors = i;
//     console.log(factors);
//   }
// }

// 8. Check if a number is perfect (the sum of its proper divisors equals the number).

// let num = Number(prompt("Enter a number"));
// // let num = 496;
// let factors;
// let sum = 0;
// for (let i = 1; i < num; i++) {
//   if (num % i == 0) {
//     factors = i;
//     sum = sum + factors;
//     console.log("factor value:", factors);
//   }
// }
// if (sum === num) {
//   console.log("The number is perfect number");
// } else {
//   console.log("not perfect");
// }

// 9. Determine if a number is a Harshad number (divisible by the sum of its digits).

// let num = 143;
// let temp = num;
// let sum = 0,
//   digit;

// for (; num > 0; ) {
//   digit = num % 10;//3,5,1
//   sum = sum + digit;//3,8,9
//   num = Math.floor(num / 10);//15 //1

// }
// if (temp % sum === 0) {
//   console.log("its a harshad number");
// } else {
//   console.log("its not a harshad number");
// }

// 10. Read numbers until 0 is entered and calculate their average.

// let sum = 0;
// let count = 1;
// let avg

// for (; true;) {
//   num = Number(prompt("Enter a numbers"));
//   if (num!==0) {
//     sum = sum + num;
//     avg = sum / count;
//     count++;
//   } else {
//     break;
//   } 
// }
// console.log(avg);

// 11. Check if a number is a palindrome.

// let num = Number(prompt("Enter a number"));
// let originalNum = num;
// let reverse = 0;

// for (; num > 0; num = Math.floor(num / 10)) {
//   let digit = num % 10;
//   reverse = reverse * 10 + digit;
// }

// if (reverse === originalNum) {
//   console.log("Palindrome Number");
// } else {
//   console.log("Not a Palindrome");
// }





// console.log("Code Subtle's countdown:");
// for (let i = 10; i >= 1; i--) {
//   console.log(Code Subtle counts: i${i});
// }

// //Check the factorial of the number
// let num = Number(prompt("enter a number"));
// let fact = 1;
// for (let i = 1; i <= num; i++) {
//   fact = fact * i ;
//   console.log(fact);//5//10//30//120
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


// Check whether a number is a Harshad number (e.g. 18 is divisible by 1+8) 

// let num = Number(prompt("Enter a number to check "));

// let sum = 0;
// for(let i=num;)


// Print all prime numbers between 1 to 100

// let num = 100;
// for(let i=2;i<num;i++){                 
//     if(i % 2 !== 0){
//         if(i%3==0){
//             console.log(i);
            
//             console.log("not a prime no ");
            
//         }
//         else {
//             console.log(i);
            
//             console.log("prime no ");
            
//         }
// }
//     else{
//         console.log(i);
        
//         console.log("not a prime no ");
        
//     }
// }

// let num =Number(prompt("Enter a number "));
// let sum=0;
// digits=sum(int(digit) in digits);
// if(num%digits==0){
//     console.log("harshad number ");
    
// }
// else{
//     console.log("not a harshad number");
    
// }





// 13. Check if a number is a strong number (the sum of factorials of 
// digits equals the number).

// let num = 10;
// let temp = num;
// let sum = 0;

// for (; num > 0; num = Math.floor(num / 10)) {
//   let digit = num % 10;
//   let fact = 1;

//   for (let i = digit; i >= 1; i--) {
//     fact *= i;
//   }

//   sum += fact;
// }

// if (sum === temp) {
//   console.log("strong number");
// } else {
//   console.log("not a strong number");
// }










// 16. Generate the series: 0 1 3 6 10 15 21


// let sum = 0;

// for (let i = 0; i <= 6; i++) {
//   sum = sum+ i;
//   console.log(sum);
// }


// 19. Generate the series: 2 3 4 6 6 9 8 12 10 15


// for (let i = 1; i <= 5; i++) {
//   let even = i * 2;
//   let odd = i * 3; 
//   console.log(even); 
//   console.log(odd); 
// }

//22. Calculate sum: S = (1+2) + (1+2+3) + ... + (1+...+15)



// let num = 15;
// let Sum1 = 0;
// sum=0;

// for (let i = 2; i <= num; i++) {
//   Sum1 = (i * (i + 1)) /2; 
//   sum=sum+Sum1
//   console.log(Sum1);
  
// }

// console.log("The total sum  is:", Sum1);




//25. Write a program to accept a number, then print the sum of digits 
// and the number of digits present in it.

// let number = prompt("Enter a number:");
// let sum = 0;
// let count = 0;

// for (let i = 0; i < number.length; i++) {
//   sum = sum+ parseInt(number[i]);
//   count++;
//   console.log("Sum of digits: ", sum);
// }
// console.log("Number of digits: " , count);


// 28. Count how many odd, even, and zero values exist in 10 input numbers.

// let odd = 0;
// let even = 0;
// let zero = 0;

// for (let i = 1; i <= 10; i++) {
//   let num = parseInt(prompt("Enter number:"));
//   {
//     if (num === 0) {
//       zero++;
//     } else if (num % 2 === 0) {
//       even++;
//     } else {
//       odd++;
//     }
//   }
// }
// console.log("Odd:", odd);
// console.log("Even:", even);
// console.log("Zero:", zero);

// 31. Find the second-highest number among 10 input numbers.

// let max = 0;
// let second = 0;

// for (let i = 1; i <= 10; i++) {
//   let num = parseInt(prompt("Enter number:"));

//   if (num > max) {
//     second = max;
//     max = num;
//   } else if (num > second && num != max) {
//     second = num;
//   }
// }
// console.log("Highest number ",max);
// console.log("Second highest number is: " ,second);


// let num = 30;
// let isPrime=true
// let j
// for (let i = 1; i <= num; i++) {
// if(num%i==0){
   
//     }
// }





