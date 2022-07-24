let person = {};

let getData;

geData = person.name;
console.log(geData); // undefined

getData = person.name.firstName; // will return error

// using Optional Chainning
getData = person.name?.firstName; // will return undefined

// using optional chaining we can check if the property exists just add ? after the property name
