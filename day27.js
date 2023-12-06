function* range_generator(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

// Main func
const startValue = 1;
const endValue = 10;
const output = range_generator(startValue, endValue);

for (const number of output) {
  console.log(number);
}
