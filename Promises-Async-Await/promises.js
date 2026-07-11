// Promises & Asynchronous Programming -> A modern way to handle Asynchronous Code

// What is Asynchronous Programming ?

// Synchronous: Tasks execute one at a time in order. Next task waits fot the current one to finish.

// Asynchronous: Tasks can start and finish independently, without blocking other code.

// console.log(1);
// console.log(2);
// console.log(3);

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 2000);
// console.log(3);

// The Problem: Callback Hell -> Callback were the original way to handle async operations. Too many nested callbacks make code hard to read and maintain. Known as Callback Hell or Pyramid of Doom

// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//     setTimeout(() => {
//       console.log(3);
//     }, 3000);
//   }, 5000);
// }, 1000);

// What is a Promise ?
// Definition: A Promise is an object that represents the eventual completion or failure of an asynchronous operation

// States of a Promise:

// Pending - initial State
// Fulfilled - Operation Successful
// Rejected - operation failed

// ======================================================================

// let loginStatus = true;
// let myPromise = new Promise((resolve, reject) => {
//   if (loginStatus) {
//     resolve({ status: 1, msg: "Promise resolve" });
//   } else {
//     reject({ status: 0, msg: "Invalid UserName or Password" });
//   }
// });

// myPromise
//   .then((res) => {
//     console.log(res); // {status: 1, msg: 'Promise resolve'}
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise => then catch
// console.log(myPromise);

// ======================================================================

// let doneTask = (taskNumber, time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Task", taskNumber);
//       resolve();
//     }, time);
//   });
// };

// doneTask(1, 1000)
//   .then((res) => doneTask(2, 2000))
//   .then((res) => doneTask(3, 1000));

// ======================================================================

let doneTask = (taskNumber, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log();
      resolve("Task" + taskNumber);
    }, time);
  });
};

let doHomeWork = (subject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${subject} homework done`);
    }, 1000);
  });
};

let finishHomeWork = async () => {
  //   let myTask = await doHomeWork("Math");
  //   console.log(myTask);

  //   let myTask2 = await doHomeWork("Gujarati");
  //   console.log(myTask2);

  let allPromise = await Promise.all([
    doHomeWork("Math"),
    // myPromise,
    doHomeWork("Hindi"),
    doneTask(1, 1000),
    doHomeWork("Gujarati"),
    doHomeWork("English"),
  ]);
  console.log(allPromise);

  console.log("My All Task Done");
};

finishHomeWork();
