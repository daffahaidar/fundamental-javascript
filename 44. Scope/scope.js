// global scope
let a = 5;

function sum() {
  // local scope
  let b = 10;
  console.log(a + b); // a can be accessed here because it is in the global scope
}

// but b cannot be accessed here because it is in the local scope
console.log(a + b); // error
