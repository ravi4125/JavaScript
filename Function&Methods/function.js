// What is function ? -> A function is a reusable block of code that performs a specific task when you call it.

// =====================Simple Function=====================

// displayData();
// function displayData() {
//   document.write("Welcome to my project");
// }
// displayData();

// function showName() {
//   alert("Namastee");
// }

// function addData() {
//   console.log(10 + 20);
// }
// addData(); // 30

// =====================Function with Parameters=====================

// function showName(userName) {
//   console.log(`Welcome ${userName}`);
// }
// showName("Ravi"); // Welcome Ravi
// showName("Sumit"); // Welcome Sumit

// function addData(num1, num2) {
//   console.log(num1 + num2);
// }
// addData(10, 20); // 30

// function addData(num1, num2) {
//   console.log(num1, num2);
// }
// addData(10); // 10 undefined

// function addData(num1, num2 = 1) {
//   console.log(num1 + num2);
// }
// addData(10); // 10 + 1 = 11
// addData(10, 20); // 10 + 20 = 30

// function sumData(...allparams) {
//   console.log(allparams);
// }

// sumData(10, 55, 99, 77, 88); // [10, 55, 99, 77, 88]

// =====================Return type Function=====================

// function addData(num1, num2) {
//   //   console.log(num1 + num2); // 30
//   return num1 + num2;
// }
// console.log(addData(10, 20)); // 30

// function taxcal(price) {
//   return price * 0.1;
// }

// let productPrice = 50000;

// let total = taxcal(productPrice) + productPrice;
// console.log(total); // 55000

// =====================Anonymous Function=====================

// An annonymous function has no name. it's usually stored in a variable or used directly as a callback
// Common use:- Callbacks, Event Listeners

// let display = function () {
//   console.log("welcome");
// };
// display();

// =====================Callback Function=====================

// A callback is a function passed to another function as an argument and executed later

// function addData(num1, num2) {
//   return num1 + num2;
// }

// function minData(num1, num2) {
//   return num1 - num2;
// }

// function calculates(num1, num2, callback) {
//   //   console.log(num1); // 10
//   //   console.log(num2); // 20
//   console.log("Final cal ", callback(num1, num2)); // 30 // 20
// }
// calculates(10, 20, addData); // 30
// calculates(40, 20, minData); // 20

// =====================Arrow Function=====================

// Arrow functions offer a shorter syntax than regular functions

// let addData = () => {
//   console.log("welcome");
// };
// addData();

// let addData = (n, m) => {
//   return n + m;
// };
// console.log(addData(10, 20)); // 30

// let addData = (n, m) => n + m;
// console.log(addData(50, 20)); // 70

// let addData = (x) => x * x;
// console.log(addData(50)); // 2500
