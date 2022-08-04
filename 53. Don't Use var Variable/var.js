// var variable is not recommended to use in javascript because it is not block scoped.
// let and const are block scoped.

// example let
let i = 20;

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i); // it will access the global variable i = 20;

// example var
var j = 20;

for (var j = 0; j < 10; j++) {
  console.log(j);
}

console.log(j); // it will access the variable in the loop;
