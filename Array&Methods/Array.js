// What is an Array? -> An array is a single variable that can hold multiple values at the same time.

// let user = ["ravi", "ram", "sumit", "om"];
// console.log(user[2]); // sumit
// console.log(user[3]); // om

// let l = [1, 2, 3, 4, 5, [10, 20, 30]];
// console.log(l[5][1]); // [10, 20, 30][1] = 20

// =================for for...of for...in=================

// let user = ["ravi", "ram", "sumit", "om", 10, 20];
// console.log(user.length);

// let t = user.length;

// for (let i = 0; i < t; i++) {
//   console.log(i, user[i]);
// }

// console.log("");
// console.log("");

// for (let i = t - 1; i >= 0; i--) {
//   console.log(i, user[i]);
// }

// let l = [10, 20, 30, 40, 50, 99];

// for (let v of l) {
//   console.log(v);
// }

// for (let k in l) {
//   console.log(k, l[k]);
// }

// let l = [10, 20, 30, 40, 50, 99];

// let sum = 0;
// for (let v of l) {
//   sum += v;
//   console.log(v);
// }
// console.log(sum);

// let l = [10, 20, 30, 23, 52, 88, 55, 45, 65, 74, 59, 41, 52];

// for (let v of l) {
//   if (v % 2 == 0) {
//     console.log(v);
//   }
// }

// let l = [1, 2, 3];
// l[1] = 30;
// console.log(l);

// ================= Methods =================

// Mutating Methods (Modify the original array)

// 1. push() -> add elements to the end of an array
// 2. pop() -> removes the lasst element from an array
// 3. shift() -> removes the first element from an array
// 4. unshift() -> add elements to the beginning of an array
// 5. splice() -> add remove or replace elements at a specified index
// 6. sort() -> Sorts the elemts of an array in place
// 7. reverse() -> Reveres the order of elements in an array in place
// 8. fill() -> Fills all elements of an array from a start index to an end index with a static value

// let l = [10, 20, 30, 40, 50];
// // l.push(99);  // [10, 20, 30, 40, 50, 99]
// l.push(55, 100); // [10, 20, 30, 40, 50, 55, 100]
// console.log(l);

// let l = [1, 2, 3, 4, 5, 6, 7];
// // l.pop(); // [1, 2, 3, 4, 5, 6]
// console.log(l.pop()); // 7
// console.log(l);

// let l = [1, 2, 3, 4, 5, 6, 7, 8];
// l.shift(); // [2, 3, 4, 5, 6, 7, 8]
// console.log(l.shift()); // 2
// console.log(l); // [3, 4, 5, 6, 7, 8]

// let l = [1, 2, 3, 4, 5];
// l.unshift(25);
// console.log(l); // [25, 1, 2, 3, 4, 5]

// let l = [1, 2, 3, 4, 5, 6];
// // l.splice(1, 2);
// // console.log(l); // [1, 4, 5, 6]
// l.splice(1, 2, 77, 99, 44);
// console.log(l); // [1, 77, 99, 44, 4, 5, 6]

// let l = [55, 99, 12, 22, 36, 37];
// l.sort();
// console.log(l); // [12, 22, 36, 37, 55, 99]

// let l = [55, 99, 12, 22, 36, 37];
// l.sort().reverse();
// console.log(l); // [99, 55, 37, 36, 22, 12]
// l.reverse();
// console.log(l); // [12, 22, 36, 37, 55, 99]

// let l = [55, 66, 88, 55, 44, 22, 21];
// // l.fill(5);
// // console.log(l); // [5, 5, 5, 5, 5, 5, 5]
// l.fill(5, 1, 4);
// console.log(l); // [55, 5, 5, 5, 44, 22, 21]

// =====================Task=====================

// let l = [1, 2, 3, 4, 5];

// for (let v of l) {
//   l.pop();
// }

// // round 1 [1, 2, 3]
// // round 2 [1, 2]

// console.log(l);

// let l = [1, 2, 3, 4];

// for (let v of l) {
//   l[3] = v;
// }

// // Round 1 l[3]=1 [1, 2, 3, 1]
// // Round 2 l[3]=2 [1, 2, 3, 2]
// // Round 3 l[3]=3 [1, 2, 3, 3]
// // Round 4 l[3]=3 [1, 2, 3, 3]

// console.log(l);

// Non - Mutating Methods (Return a new array or value without modifying the original)

// 1. Slice() -> Returns a shallow copy of a portion of an array into a new array
// 2. concat() -> Joins two or more arrays, returning a new array
// 3. includes() -> Determines whether an array includes a cretain value among its entries, returning true or false
// 4. indexOf() -> Returns the first index at which a given element can be found in the array, or -1 if it is not present
// 5. join() -> Joins all elements of an array into a string
// 6. toString() -> Returns a string representing the specific array and its elements

// let l = ["red", "green", "blue", "yellow"];
// let newArray = l.slice(1, 3);
// console.log(newArray); // ['green', 'blue']

// let l1 = [10, 20, 30, 40];
// let l2 = [50, 60, 70];
// let l3 = [50, 60, 99];
// let final = l1.concat(l2, l3);
// console.log(final); // [10, 20, 30, 40, 50, 60, 70, 50, 60, 99]

// let n = [10, 20, 30, 44, 55];
// console.log(n.includes(50)); // false
// console.log(n.indexOf(30)); // 2
// console.log(n.indexOf(40)); // -1

// let color = ["red", "green", "blue", "orange"];
// let join = color.join("-");
// console.log(join); // red-green-blue-orange

// let string = color.toString();
// console.log(string); // red,green,blue,orange

// ======================Array Destructuring======================

// let color = ["red", "green", "blue"];

// let [first, second] = color;
// console.log(first, second); // red green

// let l = [10, 20, 30, 40];
// let [, , a] = l;
// console.log(a); // 30

// let l = [10, 20, 30, 40];

// let [a, ...rest] = l;
// console.log(a, rest); // 10 [20, 30, 40]

// let l = [1, 2, 3, 4, 5];
// let m = l; // deep copy
// console.log(l);
// console.log(m);

// m.push(6);
// // After update
// console.log(l);
// console.log(m);

// let l = [1, 2, 3, 4, 5];
// let m = [...l]; // Shallow copy
// console.log(l);
// console.log(m);

// m.push(6);
// // After update
// console.log(l);
// console.log(m);

// ======================Higher Order Functions======================

// 1. map() -> map() is a method that creates a new array by applying a function to every element of an existing array.

// Creates a new array by transforming every element.

// let l = [10, 20, 30, 40];

// l.map((value, index) => {
//   console.log(value, index); // 10 0, 20 1,....
// });

// let mapArray = l.map((value, index) => {
//   return value + 5;
// });
// console.log(mapArray); // [15, 25, 35, 45]

// let n = [2, 4, 6, 8];

// let square = (v) => v ** 2;

// let squareArray = n.map(square);

// console.log(squareArray); // [4, 16, 36, 64]

// 2. filter() -> filter() creates a new array containing only the elements that pass a test (return true) from the original array.

// Returns a new array containing only the elements that satisfy a condition.

// let n = [10, 20, 23, 25, 90, 15, 16, 29, 63];

// let filterArray = n.filter((value) => {
//   if (value % 3 == 0) {
//     return true;
//   }
// });
// console.log(filterArray); // [90, 15, 63]

// let filterArray = n.filter((value) => value % 3 == 0);
// console.log(filterArray); // [90, 15, 63]

// let user = [
//   {
//     name: "ravi",
//     age: 21,
//   },
//   {
//     name: "raj",
//     age: 12,
//   },
//   {
//     name: "sumit",
//     age: 27,
//   },
//   {
//     name: "om",
//     age: 21,
//   },
//   {
//     name: "jonal",
//     age: 16,
//   },
// ];
// console.log(user);

// let filterUser = user.filter((obj) => obj.age >= 18);
// console.log(filterUser);

// 3. reduce() -> reduce() takes an array and reduces it to a single value by applying a function to each element, carrying an accumulated result forward.

// Reduces the entire array into a single value (sum, product, object, etc.).

// let l = [10, 20, 30, 40];

// let total = l.reduce((sum, value) => sum + value, 0);
// console.log(total); // 100

// 4. find() -> find() returns the first element in an array that passes a test (returns true). If nothing passes, it returns undefined.

// find() is an Array Higher Order Function that returns the first element that satisfies a condition. If no element matches, it returns undefined.

// let user = [
//   {
//     name: "ravi",
//     age: 21,
//   },
//   {
//     name: "raj",
//     age: 18,
//   },
//   {
//     name: "sumit",
//     age: 27,
//   },
//   {
//     name: "om",
//     age: 21,
//   },
//   {
//     name: "jonal",
//     age: 18,
//   },
// ];
// console.log(user);

// let findData = user.find((value) => value.age == 18);

// console.log(findData); // {name: 'raj', age: 18}

// let n = [10, 25, 36, 47, 33, 39];

// let oddNumber = n.find((value) => value % 2 != 0);
// console.log(oddNumber); // 25

// 5. forEach() -> forEach() is a method that executes a function once for each element in an array. It's used for performing actions on array items.

// forEach() is an Array Higher Order Function used to loop through each element of an array.

// Important: forEach() does not return a new array. It is mainly used for performing actions like printing values, updating the DOM, or calling functions.

// let user = [
//   {
//     name: "ravi",
//     age: 21,
//   },
//   {
//     name: "raj",
//     age: 12,
//   },
//   {
//     name: "sumit",
//     age: 27,
//   },
//   {
//     name: "om",
//     age: 21,
//   },
//   {
//     name: "jonal",
//     age: 16,
//   },
// ];

// user.forEach((Obj, index) => {
//   console.log(index, Obj.name, Obj.age); // 0 'ravi' 21,....
// });
