const sum = function (...numbers) {
  debugger; // this will stop the execution of the code and will show the current line of code

  let total = 0;
  for (let i of numbers) {
    total = i;
  }
  return total;
};

sum(1, 2, 3, 4, 5);
