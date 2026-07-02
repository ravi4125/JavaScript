// What is a Loop? - A loop is a way to repeat a block of code multiple times until a certain condition is met.

// 1. For loop -> Used when you know how many times you want to run the loop

// for (let i = 1; i <= 10; i++) {
//   console.log(i, "welcome");
// }

// // console.log(i); // error bcz let is block scope haiii

// for (var s = 10; s >= 1; s--) {
//   console.log(s, "welcome");
// }

// console.log(s);

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for (let i = 2; i <= 100; i = i + 2) {
//   console.log(i);
// }

// 2. While loop -> Executes a block of code as long as a condition is true

// let s = 1;
// while (s <= 10) {
//   console.log(s, "welcome");
//   s++;
// }

// console.log(s);

// 3. Do...while loop

// let s = 20;
// do {
//   console.log(s);
//   s++;
// } while (s <= 10);

// ===============Break and continue===============

// for (let i = 1; i <= 10; i++) {
//   console.log(i, "welcome");
//   if (i == 5) {
//     break; // 5 print thase pachi loop break thase km k console aapde condition na pahela karyu che etle
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   if (i == 5) {
//     break; // 5 print nai thay
//   }
//   console.log(i, "welcome");
// }

// for (let i = 1; i <= 10; i++) {
//   if (i == 3 || i == 9) {
//     continue; // corrent value ne skip kar dese
//   }
//   console.log(i, "welcome");
// }

// 4. For...of Loop -> Used to loop over iterables like arrays, strings etc.

// let w = "welcome";

// for (let v of w) {
//   console.log(v);
// }

// let l = [1, 2, 3, 4, 5];

// for (let v of l) {
//   console.log(v);
// }

// 5. for...in loop -> used to loop over object properties (keys)

// let l = [1, 2, 3, 4, 5];

// for (let v in l) {
//   console.log(v);
// }

// let obj = {
//   name: "ravi",
//   age: 21,
// };
// for (let v in obj) {
//   //   console.log(v);
//   console.log(v, obj[v]);
// }

// ===============Task- Print Table===============

// for (let i = 1; i <= 10; i++) {
//   // console.log("2 *", i, "=", i * 2);
//   document.write("100 * ", i, " = ", i * 100, "<br>");
// }

// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//   // console.log(i);
//   sum = sum + i;
// }
// console.log(sum);

// 6. Nested Loop (Loop inside loop) -> Useful for working with multi-dimensional data or patterns

// for (let i = 1; i <= 5; i++) {
//   for (let i = 1; i <= 5; i++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(`${i} X ${j} = ${i * j}`);
//   }
// }

for (let i = 1; i <= 5; i++) {
  for (let r = 1; r <= i; r++) {
    document.write("*");
  }
  document.write("<br>");
}
