// Function that returns a promise resolving with an array after 1 second
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 1000);
  });
}

// Function to update the output div with the provided text
function updateOutput(text) {
  document.getElementById('output').textContent = text;
}

// Chained promises
getNumbers()
  .then((numbers) => {
    // Filter out odd numbers
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        updateOutput(evenNumbers.join(', '));
        resolve(evenNumbers);
      }, 500);
    });
  })
  .then((evenNumbers) => {
    // Multiply even numbers by 2
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubledEvenNumbers = evenNumbers.map(num => num * 2);
        updateOutput(doubledEvenNumbers.join(', '));
        resolve(doubledEvenNumbers);
      }, 1000);
    });
  });

// Function that returns a promise resolving with an array after 3 seconds
// function getNumbers() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([1, 2, 3, 4]);
//     }, 3000);
//   });
// }

// // Function to update the output div with the provided text
// function updateOutput(text) {
//   document.getElementById('output').innerText = text;
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
//       }, 1000);
//     });
//   })
//   .then((evenNumbers) => {
//     // Multiply even numbers by 2
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const doubledEvenNumbers = evenNumbers.map(num => num * 2);
//         updateOutput(doubledEvenNumbers.join(', '));
//         resolve(doubledEvenNumbers);
//       }, 2000);
//     });
//   });




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
//   const outputDiv = document.getElementById('output');
//   outputDiv.textContent = content.join(', ');
// }

// // Execute the promise chain
// getNumbers()
//   .then(numbers => {
//     return filterOddNumbers(numbers).then(evenNumbers => {
//       updateOutput(evenNumbers); // Update after filtering odd numbers
//       return evenNumbers;
//     });
//   })
//   .then(evenNumbers => {
//     return multiplyEvenNumbers(evenNumbers).then(multipliedNumbers => {
//       updateOutput(multipliedNumbers); // Update after multiplying even numbers by 2
//       return multipliedNumbers;
//     });
//   })
//   .catch(error => console.error('Error:', error));
