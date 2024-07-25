// Function that returns a promise resolving with an array after 3 seconds
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Function to simulate a delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to update the output div with the provided text
function updateOutput(text) {
  document.getElementById('output').innerText = text;
}

// Main async function to handle the chaining of promises
async function processNumbers() {
  const numbers = await getNumbers(); // Wait for the numbers to be retrieved
  
  await delay(1000); // Wait 1 second before filtering

  // Filter out odd numbers and update the output
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  updateOutput(evenNumbers.join(', '));

  await delay(2000); // Wait another 2 seconds before multiplying

  // Multiply even numbers by 2 and update the output
  const doubledEvenNumbers = evenNumbers.map(num => num * 2);
  updateOutput(doubledEvenNumbers.join(', '));
}

// Call the main function to start the process
processNumbers();


// old code
// // Function that returns a promise resolving with an array after 1 second
// function getNumbers() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([1, 2, 3, 4]);
//     }, 1000);
//   });
// }

// // Function to update the output div with the provided text
// function updateOutput(text) {
//   document.getElementById('output').textContent = text;
// }

// // Chained promises
// getNumbers()
//   .then((numbers) => {
//     // Filter out odd numbers
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const evenNumbers = numbers.filter(num => num % 2 === 0);
//         updateOutput(evenNumbers.join(', '));
//         resolve(evenNumbers);
//       }, 500);
//     });
//   })
//   .then((evenNumbers) => {
//     // Multiply even numbers by 2
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const doubledEvenNumbers = evenNumbers.map(num => num * 2);
//         updateOutput(doubledEvenNumbers.join(', '));
//         resolve(doubledEvenNumbers);
//       }, 1000);
//     });
//   });
