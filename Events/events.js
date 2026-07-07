// What is Events ? -> An event is  an action performed on web page such as clicking, typing or scrolling.

// ========================= Mouse Events =========================

// click - single click
// dbclick - double click
// contextmenu - right click
// mouseenter - mouse enters element
// mouseleave - mouse leaves element
// mousemove - mouse movement
// mousedown - mouse button pressed
// mouseup - mouse button released

// let mainELem = document.querySelector(".main");

// mainELem.addEventListener("mouseenter", () => {
//   mainELem.style.background = "green";
// });

// mainELem.addEventListener("mouseleave", () => {
//   mainELem.style.background = "red";
// });

// let body = document.body;

// body.addEventListener("contextmenu", () => {
//   console.log("Hello");
// });

// ========================= Keyboard Events =========================

// keydown - key pressed (any key)
// keyup - key released
// keypress - key pressed (deprecated, avoid)  X

// ========================= Form Events =========================

// submit - Form Submitted
// Change - Value Changed (select, checkbox, etc)
// input - Value enteres in real-time
// focus - inout gets focus
// blur - inout loses focus

// ======================= window/document Events =======================

// load - page fully loaded
// scroll - page scroll
// resize - window size change

// ========================= Clipboard Events =========================

// copy - copy content
// cut - cut content
// paste - paste content

// Event Object -> The browser sends an object to the event handler with information about what happened

// Event Delegation --> Example in eventobject.html file

// Event bubbling with stoppropagation -> An event first occurs on the target element and then bubbles up to its parent -> grandparent -> document -> window. Using stopPropagation() stops this bubbling
