process.on("message", (cant) => {
  // Array with all the generated numbers
  const numbers = [];
  // Counter
  const count = {};
  for (let i = 0; i < cant; i++) {
    numbers.push(Math.round(Math.random() * (1000 - 1) + 1));
  }
  numbers.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });
  process.send(count)
});
