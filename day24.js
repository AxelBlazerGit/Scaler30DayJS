// Challenge 24
// Description:
// Implement a debounce function that takes a function and a delay as arguments. The returned function should ensure that the original function is not called more than once in the specified delay.
// Solution Approach:
// Use a timer and clear it on each invocation to delay the function execution.
function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
function handleInput(value) {
    console.log(`Input value: ${value}`);
}
const debouncedHandleInput = debounce(handleInput, 1000);
debouncedHandleInput('A');
debouncedHandleInput('B');
debouncedHandleInput('C');