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

                                                  //QUESTION : 5
// STEP:1
let rate = Number (prompt("enter the rate"))
let quantity = Number (prompt("enter the quantity"))
// STEP:2
let total = (rate*quantity)
    console.log('total amount is:',total);
//STEP:3
    if (total >= 100 && total <= 500) {
      console.log("a key ring");
    }
//STEP:4
    else if (total >= 500 && total <= 1000) {
      console.log("a leather purse");
    }
//STEP:5
    else if (total >= 1000) {
      console.log("a pocket calculator");
    }
//STEP:6
    else {
      console.log("KYA REH BHEK MANGYA  ");
    }
