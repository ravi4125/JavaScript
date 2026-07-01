// What are Operators?  -  Operators are symbols that tell JavaScript to perform an action on values, like math calculations, comparisons, or logic.

// 1. Arithmetic operators

// + -> Addition
// - -> Subtraction
// * -> multiplication
// / -> division
// % -> modulus (Remainder)
// ++ -> Increment
// -- -> Decrement

// let n = 10;
// let m = 20;
// console.log(n + m); // 30
// console.log(n - m); // -10
// console.log(n * m); // 200
// console.log(n / m); // 0.5
// console.log("n + m"); // n + m
// console.log(n % 4); // 10 % 4 = 2

// n++; // 10 + 1 = 11
// n++; // 11 + 1 = 12
// console.log(n);

// console.log(10 ** 2); // 100

// 2. Assignment operators

// = -> Assigns value
// += -> x += 2
// -= -> x -= 2
// *= -> x *= 2
// /= -> x /= 2
// %= -> x %= 2

// let a = 10;
// let b = 20;

// a = a + b; // 10 + 20 = 30
// b = a - b; // 30 - 20 = 10
// a = a - b; // 30 - 10 = 20

// console.log(a);
// console.log(b);

// 3. Comparison Operators

// == -> Equal to
// === -> Equal value and type
// != -> Not equal
// !== Not equal value or type
// > -> Greater than
// < Less than
// >= -> Greater than or equal
// <= Less than or equal

// let a = 10;
// let b = 20;

// console.log(a == b); // false
// console.log(a == "10"); // true

// console.log(a === "10"); // false
// console.log(a === b); // false

// console.log(20 != b); // false 20=20
// console.log(a !== b); // true

// let n = 50;
// let m = 20;

// console.log(n < m); // false 50 < 20
// console.log(n > m); // true 50 > 20

// console.log(90 >= 60); // ture

// console.log((60 > 50) + 5); // ture + 5 = 6

// let a = 10;
// let b = 20;
// let c = 5;

// console.log(a < b < c); // 10<20 -> true < c = 1<5

// 4. Logical Operators

// && -> Logical AND
// || -> Logical OR
// ! -> Logical NOT

// let userName = "code";
// let password = "123";

// console.log(userName == "code" && password == "123"); // true

// console.log(10 == 20 || 10 > 20); // false

// console.log(!(20 != 20)); // !(false) -> true

// 5. String Operators

// + -> Concatenation

// let str = "welcome";
// let str1 = " ws";

// console.log(str + str1);  // welcome ws

// str += " hello";
// console.log(str); // welcome hello

// console.log(10 + " hello"); // 10 hello

// 6. Ternary Operator

// let age = Number(prompt("Enter the value:--"));

// let result = age >= 18 ? "Yes" : "No";
// console.log(result);

// let num1 = Number(prompt("Enter the number1:--"));
// let num2 = Number(prompt("Enter the number2:--"));

// let result =
//   num1 > num2
//     ? `num1 ${num1} is grater the num2 ${num2}`
//     : `num1 ${num2} is grater the num2 ${num1}`;
// console.log(result);

// =============Conditional Statements=============

// 1. if statement - An if statement is a decision-making tool that runs a block of code only if a condition is true.

// if (true) {
//   console.log("Hello");
// }

// let score = 70;
// if (score > 60) {
//   console.log("Passed");
// }

// 2. if...else Statement - if-else is a decision-making tool that runs one block of code if the condition is true, and a different block if the condition is false.

// let score = 50;
// if (score > 60) {
//   console.log("Passed");
// } else {
//   console.log("Fail");
// }

// task :-

// let num1 = Number(prompt("Enter the value:--"));

// if (num1 % 2 == 0) {
//   console.log(num1, "Even Number");
// } else {
//   console.log(num1, "Odd Number");
// }

// 3. if...else if...else Ladder

// let gradeScore = Number(prompt("Enter the Grade Value:-"));

// if (gradeScore >= 90) {
//   console.log("Grade A");
// } else if (gradeScore >= 75) {
//   console.log("Grade B");
// } else if (gradeScore >= 60) {
//   console.log("Grade C");
// } else {
//   console.log("Fail");
// }

// 4. Nested if...else

// let userName = "admin";
// let password = "12345";

// let userNameInput = prompt("Enter The USer Name:--");

// if (userNameInput == userName) {
//   let passwordInput = prompt("Enter The Password");
//   if (passwordInput == password) {
//     console.log("Login Done");
//   } else {
//     console.log("Please Fill correct Password");
//   }
// } else {
//   console.log("Please FIll Correct UserName");
// }

// 5. Switch Case

// let lights = "red";

// switch (lights) {
//   case "red":
//     console.log("Stop");
//     break;

//   case "yellow":
//     console.log("Ready");
//     break;
//   case "green":
//     console.log("Go");
//     break;

//   default:
//     console.log("Invalid Light");
//     break;
// }

// Calculator:---

let num1 = Number(prompt("Enter the value1:--"));
let num2 = Number(prompt("Enter the value2:--"));
let opr = prompt(`
    1 Add (+)
    2 Min (-)
    3 Mul (*)
    4 Div (/)
    `);

if (opr == "+") {
  console.log(num1 + num2);
} else if (opr == "-") {
  console.log(num1 - num2);
} else if (opr == "*") {
  console.log(num1 * num2);
} else if (opr == "/") {
  console.log(num1 / num2);
} else {
  console.log("Invalid opr....");
}

// switch (opr) {
//   case "+":
//     console.log(num1 + num2);
//     break;
//   case "-":
//     console.log(num1 - num2);
//     break;
//   case "*":
//     console.log(num1 * num2);
//     break;
//   case "/":
//     console.log(num1 / num2);
//     break;

//   default:
//     console.log("Invalid Opr.....");
//     break;
// }
