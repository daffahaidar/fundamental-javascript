// function as a value
function sayHello(name) {
  console.log(`Hello ${name}`);
}

const say = sayHello;

say("Daffa");

// function as a parameter
function giveMeName(callback) {
  callback("Haidar");
}

giveMeName(sayHello);
