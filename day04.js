// ## Challenge 4: 
// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
function area(side1,side2,side3){
    const s=(side1+side2+side3)/2 //semi-perimeter
    return Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
}
console.log("Area of Triangle with sides 5,6 and 7 units = "+area(5,6,7)+"square units.");