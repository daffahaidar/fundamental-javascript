function* createNames() {
  yield "Daffa";
  yield "Haidar";
  yield "Nabil";
  yield "Zufar";
}

const names = createNames();
for (const name of names) {
  console.info(name);
}

// lazy
function* oddNumber(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      console.info(`Yield ${i}`);
      yield i;
    }
  }
}

// eager
function oddNumberArray(value) {
  const result = [];
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      console.info(`Yield ${i}`);
      result.push(i);
    }
  }
  return result;
}

const numbers = oddNumber(100);
// for (const number of numbers) {
//     console.info(number);
// }
console.info(numbers.next().value);
console.info(numbers.next().value);
console.info(numbers.next().value);
