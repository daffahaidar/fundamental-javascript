function outer() {
  function inner() {
    console.log("inner function");
  }

  inner(); // calling inner function
}

outer(); // calling outer function
inner(); // error: inner function is not defined (because it is inside outer function)
