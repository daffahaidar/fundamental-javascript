function createAdder(value) {
  const owner = "Daffa";

  function add(param) {
    console.info(owner);
    return value + param;
  }

  return add;
}

const addTwo = createAdder(2);
// function addTwo(param){
//     console.info("Daffa");
//     return 2 + param;
// }
console.info(addTwo(10));
console.info(addTwo(20));

const addTen = createAdder(10);
// function addTwo(param){
//     console.info("Daffa");
//     return 10 + param;
// }
console.info(addTen(10));
console.info(addTen(20));
