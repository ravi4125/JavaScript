// What is LocalStorage ? -> Browser feature for storing data persistently on the client-side
// Data is saved as key-value pairs
// No expiration date - satys until deleted
// Size limit: ~5-10 MB (varies by browser)

// ======================= LocalStorage Methods =======================

// localStorage.setItem(KeyboardEvent, value) -> Store data
// localStorage.getItem(key) -> Retrieve data
// localStorage.removeItem(key) -> Delete specific key
// localStorage.clear(key) -> Delete all keys
// localStorage.key(index) -> Get key name by index

// ===============> Storing Objects in LocalStorage <===============

// LocalStorage stores stringsonly.
// Convert object -> JSON.

// let user = {name: "ravi", age: 25}
// localStorage.setItem("user", JSON.stringify(user))

// let data = JSON.parse(localStorage.getItem("user"))
// console.log(data.name); // ravi
