
// Challenge 1:
// Write a JavaScript function that reverses a number.
// Sample Data and output:
// Example: 
// x = 32243;
// Expected Output: 34223
function reverseNumber(number){
    let numStr=number.toString();
    let num=parseInt(numStr.split('').reverse().join(''),10);
    return num;
}
//make user enter number
const num=parseInt(prompt("Enter a number: "),10);

if(isNaN(num)){
    console.log("invalid input");
}else{
    console.log(reverseNumber(num));
}


