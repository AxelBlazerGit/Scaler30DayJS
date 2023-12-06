const calculateTotal = (numbers) => {
  const total = numbers
    .filter((num) => num % 2 !== 0)
    .map((num) => num ** 2)
    .reduce((acc, num) => acc + num, 0);

  return total;
};

// Example usage:

const numbers = [1, 2, 3, 4, 5, 6];
const result = calculateTotal(numbers);
console.log(result); // Output: 35
