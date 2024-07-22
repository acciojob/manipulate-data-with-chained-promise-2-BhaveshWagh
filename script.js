async function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

async function transformData() {
  const data = await getData();
  const evenNumbers = data.filter(num => num % 2 === 0);
  await new Promise(resolve => setTimeout(resolve, 1000));
  document.getElementById("output").innerText = evenNumbers.join(", ");
  const doubledNumbers = evenNumbers.map(num => num * 2);
  await new Promise(resolve => setTimeout(resolve, 2000));
  document.getElementById("output").innerText = doubledNumbers.join(", ");
}

transformData();