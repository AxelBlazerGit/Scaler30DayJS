// *Challenge 13*
// Problem Statement: Implement a memoization function.

// Description: Write a function that takes a function as its argument and returns a memoized version of the function.

// Solution Approach: Store the function's results for previous inputs and return the stored result for repeated inputs.
function memoize(func) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key] === undefined) {
            cache[key] = func(...args);
        }
        return cache[key];
    };
}
const square = memoize((x) => {
    console.log(`Calculating square(${x})`);
    return x * x;
});
console.log(square(5)); 
console.log(square(5));
console.log(square(7));
console.log(square(7));