const a = "10";
const b = 10;

console.log(`${a + b}`); // will print "1010" because a is string and b is number

// we can convert a into number
// using parseInt() method
console.log(`${parseInt(a) + b}`); // will print "20"

// using parseFloat() method
console.log(`${parseFloat("10.3") + b}`); // parseFloat will accept decimal number in string

// using Number() method
console.log(`${Number(a) + b}`); // number will accept integer and decimal number in string

const c = "Daffa Haidar";
console.log(`parseInt(${c})`); // will print NaN (Not a Number) because c is invalid number in string
console.log(`parseFloat(${c})`); // will print NaN because c is invalid number in string

console.log(`${parseInt("1Daffa")}`); // daffa will be ignored because it is not a number
console.log(`${parseFloat("1Daffa")}`); // daffa will be ignored because it is not a number

// but we use Number() "1daffa" will return NaN
console.log(`${Number("1Daffa")}`); // will return NaN

// to check the number is NaN or not in the string we can use isNaN() method
console.log(`${isNaN("1Daffa")}`); // will return true
console.log(`${isNaN("1")}`); // will return false

// we also can convert a number into string
const d = 10;
console.log(`${d.toString()}`); // will print "10"
