// const sayHello = (name) => {
//     const say = `Hello ${name}`;
//     console.info(say);
// }

// const sayHello = (name) => console.info(`Hello ${name}`);

const sayHello = (name) => console.info(`Hello ${name}`);

sayHello("Daffa");

// const sum = (first, second) => {
//     return first + second;
// }

const sum = (first, second) => first + second;

console.info(sum(100, 100));

function giveMeName(callback) {
  callback("Daffa");
}

// Anonymous Function
// giveMeName(function (name) {
//     console.info(`Hello ${name}`);
// })

// Arrow Function
giveMeName((name) => console.info(`Hello ${name}`));
