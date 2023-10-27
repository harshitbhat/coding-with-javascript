var array = [1, 3, 5, 'seven'];

// push
array.push(9);
array;

// pop
let x = array.pop();
x;
array;

// shift
x = array.shift();
x;
array;

// unshift
array.unshift('javascript');
array;

// delete
x = delete array[2];
x;
array; // a hole, empty value
console.log(array[2]);

// reverse
x = array.reverse();
x;
array;

// splice

// The first parameter is the index number, where the new elements should be spliced in.
// The second parameter is the number of elements that should be removed. If you don’t want to remove anything, just put 0 as the second parameter.
//The rest of the parameters are the new elements to be added.

array = [1, 3, 5, 'seven', 10];
array;

array.splice(2, 0, 'four');
array;

// slice
// The slice() function can be used to slice out a piece of an array into a new array.

array = [1, 'two', 3, 4, 5, 'six', 'seven', 8, 'nine', 10];

var newArray = array.slice(4);
newArray;
var newArray2 = array.slice(2, 6);
newArray2;

// concat

var x1 = newArray.concat(newArray2);
x1;

var x2 = [].concat(newArray, newArray2);
x2;

// for...of

let str1 = '';
for (let el of x2) {
  str1 += el + ' ';
}

str1;
