// **Challenge 6**  
// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
function sum(a,b){
    if(a===b){
        return 3*a;
    }
    else{
        return (a+b);
    }

}
console.log(sum(parseInt(prompt("enter first number:  ",10)),parseInt(prompt("enter second number: ",10))))