// *Challenge 16*
// Problem Description:
// Write a JavaScript function named sumArray that takes an array of numbers and returns the sum of all the numbers in the array using the reduce() method.
// Inputs:
// An array of numbers.
// Outputs:
// A number representing the sum of the array.
// Hints:
// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// Solution Approach:
// // Initialize the reduce() method with an initial accumulator value of 0. Then, for each value in the array, add it to the accumulator.
function sumArray(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [10, 20, 30];
console.log(sumArray(array1)); 
console.log(sumArray(array2)); 
