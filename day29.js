function raceWithTimeout(promises, timeout) {
  return Promise.race([
    Promise.all(promises),
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error("Timeout")), timeout);
    }),
  ]);
}

const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2'), 500));

const timeout = 100;

raceWithTimeout([promise1, promise2], timeout)
  .then((result) => console.log('Resolved:', result))
  .catch((error) => console.error('Rejected:', error.message));
