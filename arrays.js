//  7.Array Left Rotation by 1
// Brief: Rotate array left by one position. Detailed: Move each element one position to the left and place the first element at the last position. Store the first element temporarily, shift all other elements left by one position, then place the stored element at the end. Example: Input: [1, 2, 3, 4, 5] → Output: [2, 3, 4, 5, 1]


// function rotateLeftByOne(arr) {
//   if (arr.length <= 1) return arr;
//   let first = arr.shift(); 
//   arr.push(first); 
//   return arr;
// }
// console.log(rotateLeftByOne([1, 2, 3, 4, 5])); 


// 10. Array Left Rotation by K Elements (When K = Last Index)
// Brief: Special case where K equals array's last index. Detailed: When K is equal to the last index of array (n-1), the rotation results in moving the last element to the first position and shifting all other elements one position right. Handle this edge case efficiently. Example: Input: [1, 2, 3, 4, 5], K=4 → Output: [5, 1, 2, 3, 4]

// function rotateLeftByLastIndex(arr) {
//   if (arr.length <= 1) return arr;
//   return [arr[arr.length - 1]].concat(arr.slice(0, arr.length - 1));
// }
// console.log(rotateLeftByLastIndex([1, 2, 3, 4, 5])); 


// 13.Linear Search - Print Index or -1
// Brief: Search for an element using linear search. Detailed: Search for a target element by checking each element sequentially from start to end. If element is found, return its index; if not found after checking all elements, return -1. Time complexity: O(n). Example: Input: [1, 2, 3, 4, 5], Target=3 → Output: 2


// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(linearSearch([1, 2, 3, 4, 5], 3)); 


// 16. Find Smallest Element in an Array
// Brief: Identify the minimum element in an array. Detailed: Traverse through the array and keep track of the smallest element encountered so far. Initialize with first element and compare with each subsequent element, updating minimum when a smaller element is found. Example: Input: [3, 7, 1, 9, 2] → Output: 1

// function findSmallest(arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }
// console.log(findSmallest([3, 7, 1 , 9, 2])); 


// 19. Calculate the Sum of Elements in an Array
// Brief: Compute total sum of all array elements. Detailed: Initialize sum to 0 and add each element of the array to the sum. Handle potential integer overflow for large arrays or large numbers. Consider using appropriate data types. Example: Input: [1, 2, 3, 4, 5] → Output: 15

// function sumCalc(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumCalc([1, 2, 3, 4, 5]));  


// 22. Finding the Frequency of Elements in an Array
// Brief: Count occurrence of each element in array. Detailed: Count how many times each unique element appears in the array. Use hash map/dictionary for efficient counting or nested loops for simple approach. Display each element with its frequency count. Example: Input: [1, 2, 2, 3, 3, 3] → Output: 1:1, 2:2, 3:3

// const arr = [1, 2, 2, 3, 3, 3];
// const frequency = {};

// for (let i = 0; i < arr.length; i++) {
//   let item = arr[i];
//   if (frequency[item]) {
//     frequency[item] += 1;
//   } else {
//     frequency[item] = 1;
//   }
// }

// for (let key in frequency) {
//   console.log(key + ":" + frequency[key]);
// }
