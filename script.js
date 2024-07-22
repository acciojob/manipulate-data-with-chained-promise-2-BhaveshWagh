// Create a function that returns a promise which resolves with an array of numbers after 3 seconds
function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Chain the promises
getData()
  .then(data => {
    // Filter out odd numbers
    const evenNumbers = data.filter(num => num % 2 === 0);
    document.getElementById("output").innerText = evenNumbers.join(", ");
    return evenNumbers;
  })
  .then(evenNumbers => {
    // Multiply even numbers by 2
    const doubledNumbers = evenNumbers.map(num => num * 2);
    setTimeout(() => {
      document.getElementById("output").innerText = doubledNumbers.join(", ");
    }, 2000);
  });