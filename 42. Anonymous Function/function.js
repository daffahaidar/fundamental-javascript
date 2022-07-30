// anonymous function
let say = function (name) {
  console.log(`Hello ${name}`);
};

function giveMeName(callback) {
  callback("Haidar");
}

// anonymous function in parameter
giveMeName(function (name) {
  console.log(`Hello ${name}`);
});

// or
giveMeName(say);
