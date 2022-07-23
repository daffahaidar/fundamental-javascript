let a;
console.log(a); // will print undefined

let b;
if (b === undefined) {
  console.log("b is undefined");
} else {
  console.log("b is defined");
}

let c = ["a", "b", "c"];
console.log(c[3]); // will print undefined

let d = {
  name: "John",
};
console.log(d.age); // will print undefined
