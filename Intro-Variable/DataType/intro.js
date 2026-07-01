// What is JavaScript??

// JavaScript is a programming language that makes websites interactive. When you click a button, see a pop-up, or watch a slider move, that’s JavaScript. It runs inside your web browser without needing any special software.

//Example

// document.write(10 + 50); // 60

// document.write(welcome);  // Error

// document.write("welcome");
// document.write(`Hyyyy`);

// console.log(10 + 20);

// console.log("welcome", 10 + 20);

// console.log("welcome", 10, 20 + 30);

// alert("Welcome");

// ==================Variable================

// What is a Variable? (var, let, const)

// "A variable is like a labeled box where we store data.

// let is for things that can change (like your age). block-scoped

// const is for things that never change (like your birth year). block-scoped

// var is the old way, but we don't use it much now because let and const are safer." Function-Scoped

// Example

// var a = 10;
// var b = 20;

// console.log(a + b); // 30
// console.log(a / b); // 0.5

// var a = 50;
// console.log(a + b); // 70

// var name = "welcome to my page";
// console.log(name); // welcome to my page
// console.log(name); // welcome to my page

// name = "ravi";
// console.log(name); // ravi

// let a = 10;
// console.log(a);

// // let a = 20; // error

// a = 20;
// console.log(a);

// {
//   let a = 10;
//   console.log(a);   // 10
// }

// {
//   let a = 10;
// }
// console.log(a); // Error let is block scope variable

// let a;
// {
//   a = 50;
// }
// console.log(a); //50

// const n = 10;
// console.log(n); // 10

// n = 20;
// console.log(n); // Error

// {
//   const n = 30;
//   console.log(n);
// }
// var n = 50;
// console.log(n);

// =================Hoisting=================

// Hoisting means JavaScript moves all variable and function declarations to the top of their scope before running the code. But only the declarations are moved up, not the values.

// console.log(n);
// var n = 10; // var variable top pr define value vagar etle undefine show thase

// Variable Name rules

// Must begin with alpha letter, _, or $
// Case-sensitive
// Avoide Javascript reserved words

// =================Template literals=================

// Template literals use backticks (`) to create strings with embedded variables and support multi-line formatting in javascript

// let n = 10;

// // console.log("welcome to n page"); // not work

// console.log(`welcome to ${n} page`);

// console.log(`

//     name
//     Email

//     `);

//  =================Data Types=================

// Data types are the types of values we put in variables.

// Primitive Data Types: String, number, boolean, null, undefined, Symbol, BigInt

// Non-Primitive (Reference) Types: Object, Array, Function

// let n = 10;
// console.log(n, typeof n); // number

// let n = 10.5;
// console.log(n, typeof n); // number

// let w = "Welcome";
// console.log(w, typeof w); // string

// let n;
// console.log(n, typeof n); // undefined

// let Status = false;
// console.log(Status, typeof Status); //boolean

// console.log(true + 5); // true=1 -> 1+5 =  6

// let n = null;
// console.log(n, typeof n); // object

// let p = Symbol("hello123");
// console.log(p, typeof p); // symbol

// let bigNumber = 9007199254740991n;
// console.log(bigNumber + 1n); // Output: 9007199254740992n ✅

// let huge = BigInt("123456789012345678901234567890");
// console.log(huge); // Output: 123456789012345678901234567890n ✅ // Large value easily save

// let l = [1, 2, 3, 4, 5];
// console.log(l, typeof l); // object

// let obj = {
//   name: "ravi",
//   age: 21,
// };
// console.log(obj, typeof obj); // object

// function showData() {}
// console.log(showData, typeof showData); // function

// let n = 10;
// console.log(n * "20"); // number 10 * string 20 = 200

// console.log(10 + 20); // 30

// console.log(n + "20"); // Append 1020

// console.log("hello" - 20); //NaN

// let num1 = prompt("Enter The value:-"); // String ma value lese
// console.log(num1, typeof num1); // String 20

// let num1 = parseInt(prompt("Enter The value:-")); // Number ma value convert karse
// console.log(num1, typeof num1); // Number 20

// let num1 = parseFloat(prompt("Enter the number:- ")); // Float
// console.log(num1, typeof num1); // Number 20.5

let num1 = Number(prompt("Enter the number:- ")); // Both
console.log(num1, typeof num1); // Number 20.5
