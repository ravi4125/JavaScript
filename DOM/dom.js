// What is DOM ? - DOM (Document Object Model) is a programming interface for HTML and XML documents. It represents a web page as a tree-like structure of objects, allowing JavaScript to access and modify the page dynamically.

// ======================== Select Element by ID ========================

// Ex. document.getElementById("demo");

// let headingElement = document.getElementById("heading");
// let paraElement = document.getElementById("para1");
// console.log(headingElement);
// console.log(paraElement);

// console.log(headingElement.innerHTML); // Welcome <u> boys </u>
// console.log(headingElement.innerText); // Welcome boys

// ================ Select Element using querySelector() ================

// Ex. document.querySelectorZ("selector")

// let elemByClass = document.querySelector(".inp");
// console.log(elemByClass);

// let elemById = document.querySelector("#name");
// console.log(elemById);
// console.log(elemById.type); // text
// console.log(elemById.placeholder); // name* data
// elemById.placeholder = "Enter Your name*"; // PlaceHolder Update
// // elemById.type = "password"; // type update
// elemById.value = "panchal"; // value update

// let elemId = document.querySelector("#email");
// console.log(elemId);

// let elem = document.querySelector("input");
// console.log(elem);

// ======================== querySelectorAll() ========================

// let allElem = document.querySelectorAll("li");
// console.log(allElem);
// console.log(allElem[0].innerHTML); // HTML

// allElem.forEach((items, index) => {
//   //   console.log(items);
//   console.log(items.innerHTML);
// });

// ======================== Events ========================

// let inputPass = document.querySelector("#pass");
// let btn = document.querySelector("#btn");

// function showPass() {
//   if (btn.innerHTML == "Show") {
//     inputPass.type = "text"; // password --> text
//     btn.innerHTML = "Hide";
//   } else {
//     inputPass.type = "password"; // text --> password
//     btn.innerHTML = "Show";
//   }
// }

// btn.addEventListener("click", showPass);

// ======================== addEventListener() ========================

// let input = document.querySelector("#password");
// let button = document.querySelector("#btn2"); // click

// button.addEventListener("click", () => {
//   if (button.innerHTML == "Show") {
//     input.type = "text"; // password --> text
//     button.innerHTML = "Hide";
//   } else {
//     input.type = "password"; // text --> password
//     button.innerHTML = "Show";
//   }
// });

// ====================== Apply CSS Style using JS ======================

// let btnStyleElem = document.querySelector("#btnStyle");
// let paraElement = document.getElementById("para1");

// btnStyleElem.addEventListener("click", () => {
//   paraElement.style.color = "red";
//   paraElement.style.fontSize = "20px";
// });

// ====================== Add/Remove/Toggle Class ======================

let btnaddElem = document.querySelector("#btnAdd");
let btnremoveElem = document.querySelector("#btnRemove");
let btntoggleElem = document.querySelector("#btnToggle");
let ParaElem = document.querySelector(".para");

btnaddElem.addEventListener("click", () => {
  ParaElem.classList.add("active");
});

btnremoveElem.addEventListener("click", () => {
  ParaElem.classList.remove("active");
});

btntoggleElem.addEventListener("click", () => {
  ParaElem.classList.toggle("active");
});
