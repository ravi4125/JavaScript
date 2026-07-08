// DOM Traversing -> DOM traversing is the process of navigation through the DOM tree to access parent, child, or sibling elements and nodes

// =================== Downwards (to child elements) ===================

// element.children -> Returns an HTMLCollection of child elements
//                     (only elements nodes, not text nodes)
// element.firstElementChild -> Returns the first child element
//element.lastElementchild -> Returns the last child element

// =================== Upwards (to parent elements) ===================

// element.parentElement -> Returns the parent element node
// element.closest(selector) -> Returns the nearest ancestor
//                           (including itself) that matches the selector

// =================== Sideways (to siblings) ===================

// element.previousElementSlibling -> Returns the previous sibling element
// element.nextElementSibling -> Returns the next sibling element

// =================== Node-based Traversing ===================

// element.childNodes -> NodeList of all child nodes (including text, comments)
// element.firstChild -> First child node (may be text)
// element.lasrChild -> Last child node
// element.parentNode -> Parent node (could be element, document, etc)
// element.previousSibling -> Previous sibling node (could be next)
// element.nextSibling -> Next sibling node (could be next)
