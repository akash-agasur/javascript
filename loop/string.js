// 1. Check whether a character is a vowel or consonant
// Write a function to determine if a given character is a vowel (a, e, i, o, u) or a consonant.

// function checkVowel(char) {
//   char = char.toLowerCase();
//   if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     return 'Vowel';
//   } else {
//     return 'Consonant';
//   }
// }
// console.log(checkVowel('u')); 

// 4. Length of the string without using the length property
// Calculate the length of a string without using the built-in .length property.

// function getStringLength(str) {
//   let count = 0;
//   while (str[count] !== undefined) {
//     count++;
//   }
//   return count;
// }
// console.log(getStringLength("CODE-SUBTLE")); 

// 7. Remove the vowels from a string
// Create a function that removes all vowels from a string and returns the result.


// function removeVowels(str) {
//   let result = '';
//   const vowels = 'aeiouAEIOU';

//   for (let i = 0; i < str.length; i++) {
//     if (!vowels.includes(str[i])) {
//       result += str[i];
//     }
//   }

//   return result;
// }

// console.log(removeVowels("TECHNOLOGY")); 


// 10. Remove all characters from string except alphabets
// Filter out all non-alphabetic characters from a string, keeping only letters.
 
// function removes(str){
//     let result = '';
//     for(let i=0; i < str.length;i++){
//           let char = str[i];
//         if((char >='A'&& char <= 'Z')||(char >= 'a'&& char<= 'z')){
//              result = result + char;
//             }
// }
// return result;
// }
// console.log(removes("A1K2A3S4H5"));
    