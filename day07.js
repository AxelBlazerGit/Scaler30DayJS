// *Challenge 7*  
// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
function isValid(num1, num2){
    return ((num1 === 50 || num2 === 50) || ((num1 + num2) === 50));
}

console.log(isValid(60,40));
console.log(isValid(0,50));
console.log(isValid(60,20));
console.log(isValid(10,10));
console.log(isValid(60,60));