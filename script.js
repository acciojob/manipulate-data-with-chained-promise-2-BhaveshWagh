// //your JS code here. If required.
// // Function that returns a promise which resolves with an array of numbers after 3 seconds
// function getNumbers() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve([1, 2, 3, 4]);
//     }, 3000);
//   });
// }

// // Function to filter out odd numbers
// function filterOddNumbers(numbers) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       const evenNumbers = numbers.filter(num => num % 2 === 0);
//       resolve(evenNumbers);
//     }, 1000);
//   });
// }
// Function that returns a promise which resolves with an array of numbers after 3 seconds
function getNumbers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Function to filter out odd numbers
function filterOddNumbers(numbers) {
  return new Promise(resolve => {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    setTimeout(() => {
      updateOutput(evenNumbers);
      resolve(evenNumbers);
    }, 1000);
  });
}

// Function to multiply even numbers by 2
function multiplyEvenNumbers(numbers) {
  return new Promise(resolve => {
    const multipliedNumbers = numbers.map(num => num * 2);
    setTimeout(() => {
      updateOutput(multipliedNumbers);
      resolve(multipliedNumbers);
    }, 2000);
  });
}

// Update the text content of the div with the id 'output'
function updateOutput(content) {
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = content.join(', ');
}

// Execute the promise chain
getNumbers()
  .then(numbers => filterOddNumbers(numbers))
  .then(evenNumbers => multiplyEvenNumbers(evenNumbers))
  .catch(error => console.error('Error:', error));

// For testing purposes, trigger the promise chain on window load
window.onload = function () {
  getNumbers()
    .then(numbers => filterOddNumbers(numbers))
    .then(evenNumbers => multiplyEvenNumbers(evenNumbers))
    .catch(error => console.error('Error:', error));
};

// // Function to multiply even numbers by 2
// function multiplyEvenNumbers(numbers) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       const multipliedNumbers = numbers.map(num => num * 2);
//       resolve(multipliedNumbers);
//     }, 2000);
//   });
// }

// // Update the text content of the div with the id 'output'
// function updateOutput(content) {
//   const outputDiv = document.querySelector('#output');
//   outputDiv.textContent = content.join(', ');
// }

// // Execute the promise chain
// getNumbers()
//   .then(numbers => filterOddNumbers(numbers))
//   .then(evenNumbers => {
//     updateOutput(evenNumbers);
//     return multiplyEvenNumbers(evenNumbers);
//   })
//   .then(multipliedNumbers => {
//     updateOutput(multipliedNumbers);
//   })
//   .catch(error => console.error('Error:', error));
