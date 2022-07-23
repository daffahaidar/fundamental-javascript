// in using for checking if a value is present in an array

let a = {
  name: "John",
  age: 30,
  address: "Bangalore",
};

if ("name" in a) {
  console.log(`${a.name} is a property of a`);
} else if ("gender" in a) {
  console.log(`gender not defined`);
}
