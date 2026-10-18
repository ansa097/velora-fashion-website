
// VELORA - Basic Interactions

// Cart button

const cartButton = document.querySelector("#cart-button");
const cartCountDisplay = document.querySelector("#cart-count");

let cartCount = 0;

cartButton.addEventListener("click", function () {
    cartCount++;
    cartCountDisplay.textContent = cartCount;
});


// Search button
const searchButton = document.querySelector(".nav-icons button:nth-child(1)");

searchButton.addEventListener("click", function () {
    const searchTerm = prompt("What are you looking for?");
    
    if (searchTerm) {
        alert("You searched for: " + searchTerm);
    }
});
 