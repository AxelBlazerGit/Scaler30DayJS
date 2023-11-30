// *Challenge 21*  
// Problem Statement: Write an asynchronous loop function that iterates over an array and performs an asynchronous operation on each ele.  
// Description: The function should take an array and an async function, applying the async function to each ele in the array in sequence.  
// Solution Approach: Use async/await within a for...of loop.
async function asyncLoop(array, asyncFunc) {
    for (const ele of array) {
        await asyncFunc(ele);
    }
}
async function AsyncFunc(ele) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Processed ele: ${ele}`);
            resolve();
        }, 1000); 
    });
}
const myArray = [1, 2, 3, 4, 5];
asyncLoop(myArray, AsyncFunc)
    .then(() => {
        console.log('Async loop completed.');
    })
    .catch((error) => {
        console.error('Error in async loop:', error);
    });