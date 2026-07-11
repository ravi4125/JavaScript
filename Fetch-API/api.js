// The Fetch API is a modern javascript interface that allows you to make HTTP requests (GET, POST, etc.) to servers.

// API (Application Programming Interface) is like a bridge allows two applications (frontend and backend) to communicate and share data.

// ======================================================================

// let getProducts = async () => {
//   let apiFirstRes = await fetch(`https://dummyjson.com/products`);
//   console.log(apiFirstRes);

//   let finalRes = await apiFirstRes.json();
//   console.log(finalRes.products);
// };
// getProducts();

// let getProducts = async () => {
//   fetch(`https://dummyjson.com/products`)
//     .then((res) => res.json())
//     .then((finalRes) => {
//       let { products } = finalRes;
//       console.log(finalRes);
//     });
// };

// getProducts();

// ======================================================================

let categoryListElem = document.querySelector("aside ul");
let productsElem = document.querySelector(".products");

let currentSlugs;

let getProducts = (catSlug = "") => {
  let apiUrl;
  if (catSlug == "") {
    apiUrl = `https://dummyjson.com/products`;
  } else {
    apiUrl = `https://dummyjson.com/products/category/${catSlug}`;
  }
  fetch(apiUrl)
    .then((res) => res.json())
    .then((finalRes) => {
      let { products } = finalRes;
      //   console.log(finalRes);

      let productList = ``;
      products.forEach((object) => {
        productList += `<div class="productItems">
              <img
                src="${object.thumbnail}"
                alt=""
              />
              <div class="priceCart">
                <b>${object.price}</b>
                <button>Add to Cart</button>
              </div>
              <h3>${object.title}</h3>
            </div>`;
      });

      productsElem.innerHTML = productList;
    })
    .catch((err) => {
      console.log(err);
    });
};

getProducts();

let getCategory = async () => {
  fetch(`https://dummyjson.com/products/categories`)
    .then((res) => res.json())
    .then((finalRes) => {
      //   let { products } = finalRes;
      //   console.log(finalRes);

      let catList = ``;
      finalRes.forEach((element) => {
        console.log(element);
        catList += `<li class="${element.slug == currentSlugs ? "activeCat" : ""}" data-slug="${element.slug}">${element.name}</li>`;
      });

      categoryListElem.innerHTML = catList;
    });
};

categoryListElem.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    currentSlugs = e.target.getAttribute("data-slug");
    // console.log(currentSlugs);
    getProducts(currentSlugs);
    getCategory();
  }
});

getCategory();
