//i++ ---> Post incremental operator
// console.log(i++);//1
// console.log(i);//2

//++i --> pre-incremental operator

// let i = 7;
// console.log(++i);//8
// console.log(++i);//9
// console.log(i++);//9
// console.log(++i);//11
// console.log(--i);//10
// console.log(++i);//11
// console.log(i--);//11
// console.log(i++);//10
// console.log(i);//11

//Q1.
// let a = 5, b = 7, c;
// c = --a + b--;//11
// console.log(a,b,c);//4,6,11

//Q2.
// let a=4,b=9,c;
// c=(a+b++)+(--a+b--)
// console.log(c);
// console.log(a);
// console.log(b);

//Q3.
// let i = 10, j, k;
// j = i++;
// k = ++i;
// console.log(i,j,k);

//Q4.
// let i = 10,j,k;
// j = i--;
// k = --i;
// console.log(i,j,k);

//Q5.
// let i = 10, j, k, l;
// j = i++ + i++;
// k = ++i + ++i;
// l = ++i + i--;
// console.log(i,j,k,l);

//Q6.
// let x = 10, y;
// y = ++x + x++ + x++;
// console.log(x,y);//13,34

//Q7.
// let i = 4, x;
// x = ++i + ++i + ++i;
// console.log(i,x);//7,18

//Q8.
// let i = 4;
// i = i++ + i++ + i++;
// console.log(i);//15

//Q9.
// let i = 0;
// i = i++ - --i + ++i - i--;
// console.log(i);//0

//10.
// let a = 12,
//   b = 13,
//   c = 11;
// a = a++ + --b + c++;
// console.log(a);//35

// b = b++ + ++a * 2;
// console.log(b);//84

// c = c++ + a++ * ++b;
// console.log(c);//3072

// console.log(a,b,c);//37 85 3072

//11.
// let i = 19,
//   j = 29,
//   k;
// k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++;
// console.log(i, j, k); //19,29,-20


// let num = Number(prompt('enter the number'))
// let snum = Number(prompt("enter the specific digit"));
// let rem,count
// while(num>0){
//     rem= num%10;
//     num=Math.floor(num/10)

   
//     if (rem===snum) {
//      console.log(rem,"specific number");
   
//     }
//     count++
  
// }
// function countOccurrences(n, d) {
//   let count = 0;

//   while (n > 0) {
//     if (n % 10 === d) {
//       count++;
//     }
//     n = Math.floor(n / 10);
//   }

//   return count;
// }



// let num = prompt("enter a number")
// if(num%3==0 && num%5==0 ){
//     console.log("Number is divisble by 3");

// }
// else if (num%3==0){
//     console.log("number is divisble 5");

// }
// else if(nuk%5==0){
//     console.log("number is not divisble");

// }
// else{
//     console.log("number is not divisble by given number");

// }

// // * Swapping 2 numbers**
// //step1
// let num1= Number(prompt("take 1 input from the user"))
// let num2= Number(prompt("take  2 input from the user"))

// //step2
// let average=(num1 + num2)/2
// console.log('The average is',average);

// //step3
// if(num1>average){
//     let temp=num1
//     num1=num2
//     num2=temp
//     console.log('if statment',num1,num2);
// }
// else{
//     console.log('else statment',num1,num2);

// }

//** LEAP YEAR */

//  //step1:
// let year = Number (prompt("enter the year"))

// // step2:
// if (year%4==0 && year%100!= 0 || year%400==0){
//     console.log('leap year');

// }
// // step3:

// else if (year%400==0){
//     console.log('centurey year is a leap year');

// }

// // step4:
// else{
//     console.log('year is not a leap year');

// }
