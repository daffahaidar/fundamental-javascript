let biodata = {
  name: "Daffa",
  age: 21,
  address: "Jakarta",
};

// print object without with statement
console.log(biodata.name);
console.log(biodata.age);
console.log(biodata.address);

// print object using with statement
with (biodata) {
  console.log(name);
  console.log(age);
  console.log(address);
}

// in new javascript with statement is not recommended
