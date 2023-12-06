function throttle(func, interval) {
  let lastInvocationTime = 0;

  return function (...args) {
    const currentTime = Date.now();

    if (currentTime - lastInvocationTime >= interval) {
      func.apply(this, args);
      lastInvocationTime = currentTime;
    }
  };
}

function myFunction() {
  console.log("Function Invoked!");
}

const throttledFunction = throttle(myFunction, 1000);

throttledFunction();

// Example usage with setTimeout
setTimeout(() => {
  throttledFunction();
}, 500);
