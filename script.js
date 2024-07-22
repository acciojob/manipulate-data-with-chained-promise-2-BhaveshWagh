function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

getData()
 .then(data => {
    const evenNumbers = data.filter(num => num % 2 === 0);
    setTimeout(() => {
      document.getElementById("output").innerText = evenNumbers.join(", ");
    }, 1000);
    return evenNumbers;
  })
 .then(evenNumbers => {
    const doubledNumbers = evenNumbers.map(num => num * 2);
    setTimeout(() => {
      document.getElementById("output").innerText = doubledNumbers.join(", ");
    }, 2000);
  });