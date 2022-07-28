// to use the rest parameter, you need to use the ... (must be the last parameter)

function sum(name, ...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += numbers;
  }

  return name + " " + total;
}

sum("Test1", 10, 20, 30);
sum("Test2", 10, 20, 30, 40);
sum("Test3", 10, 20, 30, 40, 50);
sum("Test4", 10, 20, 30, 40, 50, 60);

// old way (not recommended)
function substract() {
  let total = 0;

  for (let i of arguments) {
    total -= i;
  }

  return total;
}
