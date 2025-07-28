// // step1
// let num = Number(prompt("Enter a first number "));
// let num1 = Number(prompt("Enter a second number"));

// // step2
// let average = (num+num1)/2
//   console.log('the average is ',average);
//     // step3
// if(num>average){  
//     // step4
//       let temp=num;
//       num=num1;
//       num=temp;
//       console.log('if statement:', num,num1);
      
// }
// // step5
// else{
//     console.log('else statement:',num,num1);
    
// }


// //step1:
// let year = Number (prompt("enter the year"))

// // step2:
// if (year%4==0 && year%100!= 0 || year%400==0){
//     console.log('leap year');
    
// }
// // step3:

//  else if (year%400==0){
//     console.log('centurey year is a leap year');
    
//  }

// // step4:
// else{
//     console.log('year is not a leap year');
    
// }
                                                                  //QUESTION : 1

// // step1:
// let temperature = Number(prompt("Enter the Temperature"))
    
// // step2:

// if (temperature < 0) {
//   console.log("very cold");
// }
// // step3:

// else if (temperature < 16) {
//   console.log("Cold outside");
// }
// // step4:

// else if (temperature < 25) {
//   console.log("Wheather is ok");
// } 
// // step5:

// else if (temperature < 35) {
//   console.log("lets go for swim");
// } 
// // step6:

// else if (temperature < 45) {
//   console.log("turn on ac");
// }
// // step7:

// else {
//   console.log("too hot");
// }


                                                          //QUESTION : 2
// //step:1
// let unit =  Number (prompt('Enter the Meter number'))

// //step:2
// if (unit>0 && unit <=100){
//     console.log('unit consumed rate 0.80');
    
// }

// //step:3
// else if (unit>= 100 && unit <=200){
//     console.log('unit consumed rate 1.2');
    
// }

// //step:4
// else if (unit>= 200 && unit <=300){
//     console.log('unit consumed rate 1.5');
    
// }

// //step:5
// else if (unit >=300){
//     console.log('unit consumed rate 1.8');
    
// }

// //step:6
// else{
//     console.log('no consumed rate');
    
// }




                                                        //QUESTION : 3
// // STEP:1
// let num1 = Number (prompt("enter first sub marks"))
// let num2 = Number (prompt("enter second sub marks"))
// let num3 = Number(prompt("enter third sub marks"));

// // STEP:2:
// let average = (num1+num2+num3) /3
// console.log('The avrage is', average);


// // STEP3:
// if (average >=35 && average <=50){
//     console.log('third division');
    
// }


// //STEP:4
//  else if (average >=50 && average <= 60) {
//   console.log("second division");
// }


// //STEP:5
//  else if (average >= 60 && average <= 70) {
//   console.log("first division");
// }


// //STEP:6
//  else if (average >=70) {
//   console.log("Distinction");
// }


// //STEP:7
// else{
//     console.log("fail");
    
// }

//                                                   //QUESTION : 5
// // STEP:1
// let rate = Number (prompt("enter the rate"))
// let quantity = Number (prompt("enter the quantity"))
// // STEP:2
// let total = (rate*quantity)
//     console.log('total amount is:',total);
// //STEP:3
//     if (total >= 100 && total <= 500) {
//       console.log("a key ring");
//     }
// //STEP:4
//     else if (total >= 500 && total <= 1000) {
//       console.log("a leather purse");
//     }
// //STEP:5
//     else if (total >= 1000) {
//       console.log("a pocket calculator");
//     }
// //STEP:6
//     else {
//       console.log("KYA REH BHEK MANGYA  ");
//     }

                                                            //    NESTED IFELSE
// --4Find the largest among four numbers using nested if-else.

// let num1 = Number(prompt("Enter the first number"));
// let num2 = Number(prompt("Enter the second number"));
// let num3 = Number(prompt("Enter the third number"));
// let num4 = Number(prompt("Enter the fourth number"));

// if (num1 > num2) {
//   if (num1 > num3) {
//     if (num1 > num4) {
//       console.log(num1, "num1 is the greatest ");
//     } else {
//       console.log(num4, "num4 is the greatest ");
//     }
//   } else {
//     if (num3 > num4) {
//       console.log(num3, "num3 is the greatest ");
//     } else {
//       console.log(num4, "num4 is the greatest ");
//     }
//   }
// } else {
//   if (num2 > num3) {
//     if (num2 > num4) {
//       console.log(num2, "num2 is the greatest ");
//     } else {
//       console.log(num4, "num4is the greatest ");
//     }
//   } else {
//     if (num3 > num4) {
//       console.log(num3, "num3 is the greatest ");
//     } else {
//       console.log(num4, "num4 is the greatest ");
//     }
//   }
// }

// // 6. Calculate a tourist car bill based on car type and distance using nested
// //  conditions.
// //  - **Maruti**
// //  - ≤ 100 km → ₹800 + ₹100
// //  - 101–200 km → ₹800 + ₹10/km (above 100) + ₹300
// //  - 200 km → ₹15/km + ₹500
// // - **Sumo**
// //  - ≤ 100 km → ₹600 + ₹100
// //  - 101–200 km → ₹600 + ₹8/km (above 100) + ₹300
// //  - 200 km → ₹12/km + ₹500


// let car = prompt("Which car (maruti/sumo):").toLowerCase();

// let km = Number(prompt("How much km:"));

// let total_bill = 0;

// if (car === "maruti") {
//   if (km <= 100) {
//     total_bill = 800 + 100;
//   } else {
//     if (km <= 200) {
//       let km_charge = (km - 100) * 10;
//       total_bill = 800 + km_charge + 300;
//     } else {
//       total_bill = (km * 15) + 500;
//     }
//   }
// } else if (car === "sumo") {
//   if (km <= 100) {
//     total_bill = 600 + 100;
//   } else {
//     if (km <= 200) {
//       let km_charge = (km - 100) * 8;
//       total_bill = 600 + km_charge + 300;
//     } else {
//       total_bill = (km * 12) + 500;
//     }
//   }
// } else {
//   console.log("Invalid car type entered.");
// }


// if (car === "maruti" || car === "sumo") {
//   console.log("Total bill is: " + total_bill);
// }

                                                         // TERNARY
// Write a ternary expression that returns 1 
// if the input character is capital, otherwise 0
// let char = prompt("Enter a character:");
// let result = char >= "A" && char <= "Z" ? 1 : 0;
// console.log(result);


// 4. Check if a number is even or odd using the ternary operator.

// let num = 7;
// let result = (num % 2 === 0) ? "Even" : "Odd" ;
// console.log(result);    
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
