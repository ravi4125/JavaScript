// What is Objects ? - An object is a collection of key-value pairs that stores real-world data and behaviors.

// ======================Accessing Properties======================

// let user = {
//   email: "ravi@gmail.com",
//   phone: 8521521686,
//   status: true,
//   address: "Ahmedabad",
//   1: 10,
// };
// console.log(user.email); // ravi@gmail.com
// console.log(user.phone); // 8521521686

// console.log(user["address"]); // Ahmedabad

// // console.log(user.1) // Error
// console.log(user[1]); // 10

// ======================Adding Updating Deleting======================

// let user = {
//   email: "ravi@gmail.com",
//   phone: 8521521686,
//   status: true,
//   address: "Ahmedabad",
//   1: 10,
// };

// Add
// user.age = 32;
// console.log(user);

// Update
// user.email = "ravipanchal@gmail.com";
// console.log(user);

// ======================Destructuring======================

// Pull out properties into variables

// let userName = "ravi";

// let user = {
//   email: "ravi@gmail.com",
//   phone: 8521521686,
//   status: true,
//   address: "Ahmedabad",
//   1: 10,
//   userName,
// };

// console.log(user);

// let { email, address } = user;
// console.log(email, address);

// let { email: userEmail, address } = user;
// console.log(userEmail, address);

// ======================Rest Operator======================

// The rest operator (...) collects all the other properties that weren't picked

// let userName = "ravi";

// let user = {
//   email: "ravi@gmail.com",
//   phone: 8521521686,
//   status: true,
//   address: "Ahmedabad",
//   1: 10,
//   userName,
// };

// let { email, ...other } = user;
// console.log(email); // ravi@gmail.com
// console.log(other); // object

// ======================Nested Destructuring======================

let userName = "ravi";

let user = {
  email: "ravi@gmail.com",
  phone: 8521521686,
  status: true,
  address: {
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
  },
  1: 10,
  userName,
};

let {
  address: { city, state },
} = user;
console.log(city); // Ahmedabad
console.log(state); // Gujarat
