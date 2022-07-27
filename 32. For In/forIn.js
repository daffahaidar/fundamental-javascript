const biodata = {
  name: "Daffa",
  age: 21,
  address: "Jakarta",
};

for (let key in biodata) {
  console.log(key); // will print name, age, address (Property)
  console.log(biodata[key]); // will print Daffa, 21, Jakarta (Value)
}
