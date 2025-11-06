// Select the output div
const output = document.getElementById('output');

// Helper function to create a delayed promise
function delayedPromise(delay, operation) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(operation());
    }, delay);
  });
}

// The main function performing array transformations
function processArray() {
  const arr = [1, 2, 3, 4];

  // Initial promise that resolves after 3 seconds
  delayedPromise(3000, () => arr)
    .then((numbers) => {
      // First transformation: filter out odd numbers (after 1 second)
      return delayedPromise(1000, () => {
        const evens = numbers.filter(num => num % 2 === 0);
        output.textContent = evens.join(','); // Display result [2,4]
        return evens;
      });
    })
    .then((evens) => {
      // Second transformation: multiply even numbers by 2 (after 2 seconds)
      return delayedPromise(2000, () => {
        const multiplied = evens.map(num => num * 2);
        output.textContent = multiplied.join(','); // Display result [4,8]
        return multiplied;
      });
    });
}

// Run the function on page load
processArray();