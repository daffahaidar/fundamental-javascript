let array = [];

let array2 = [1, 2, 3, 4, 5]; // only numbers
let array3 = ["a", "b", "c", 2, 1]; // combination of numbers and strings

// add element to the end of the array
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);

// add element to the beginning of the array
array.unshift(0);

// remove element from the end of the array
array.pop();

// remove element from the beginning of the array
array.shift();

// remove element from the array
delete array[0]; //will remove element

// reassign element in the array
array[0] = "a"; // will change element

array[4] = "d"; // will add element

// print all elements of the array
console.log(array);

// find length of the array
console.log(array.length);

// find index of the element
console.log(array.indexOf(1));
console.log(array[2]);

// find element in the array
console.log(array.includes(1));

// sort array
array.sort();
console.log(array);

// reverse array
array.reverse();
console.log(array);

// remove element from the array
array.splice(0, 1);
console.log(array);
