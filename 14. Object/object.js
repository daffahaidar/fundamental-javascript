// different objects and arrays

let array = [];
let object = {}; // empty object

// add element to the end object
object[data1] = 1;
// add element to the with attribute spacing
object["First Name"] = "Daffa Haidar";

// or

let object2 = {
  // attribute: value
  "First Name": "Daffa Haidar",
  LastName: "Nabil Zufar",
  born: "27/10/2001",
  age: "21",
};

// print the object

console.log(`First Name: ${object2["First Name"]}`); // print the value of the attribute with spaceing attribute
console.log(`Last Name: ${object2.LastName}`); // print the value of the attribute with no spaceing attribute
console.log(`born: ${object2.born}`);
