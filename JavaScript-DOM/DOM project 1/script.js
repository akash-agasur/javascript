let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let counter = document.querySelector(".counter");

let count = 0;
minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counter.innerHTML = count;
  }
});
plus.addEventListener("click", () => {
  count++;
  counter.innerHTML = count;
});


let cartIcon = document.querySelector(".cart-icon");
let cartDropdown = document.querySelector(".cart-dropdown");


cartIcon.addEventListener("click", () => {
  cartDropdown.style.display =
    cartDropdown.style.display === "block" ? "none" : "block";
});


document.addEventListener("click", (e) => {
  if (!e.target.closest(".cart-container")) {
    cartDropdown.style.display = "none";
  }
});




let cartbtn = document.querySelector(".cartbtn");
let shoe = document.querySelector('.imgmain')
// let cartDropdown = document.querySelector(".cartDropdown");

let product = {
  name: "Fall Limited Edition Sneakers",
  price: 125,
  quantity: 5,
};

cartbtn.addEventListener("click", function () {
  console.log("click");

  cartDropdown.style.display = "block";
  cartDropdown
      cartDropdown.innerHTML = `

        <p class="fall"><strong>${product.name}</strong></p>
        
       <p>$${product.price} x ${product.quantity} = <strong>$${
        product.price * product.quantity
      }</strong></p>
       <button class="check" onclick="checkout()">Checkout</button>
       
     `;
});
 
let img1 = document.createElement("img1")
// let openPopup = document.querySelector("openPopup")

img.src = "images/image-product-1.jpg";
img.alt = "Example Image";
img.width = 200; // Optional
img.className = "img1"; // Optional

document.getElementById("container").appendChild(img1);













// // 1. Create the <img> element
// const img = document.createElement("img");

// // 2. Set attributes
// img.src = "img1.jpg";
// img.alt = "Example Image";
// img.width = 200; // Optional
// img.className = "thumbnail"; // Optional

// // 3. Add it to the page (e.g., inside a div with id="container")
// document.getElementById("container").appendChild(img);




