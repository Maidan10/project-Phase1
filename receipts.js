// Simulated data storage
let cart = [];

// Function to switch between tabs
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-section');
        
        // Hide all tab content sections
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Show the selected tab content
        document.getElementById(tabId).classList.add('active');
    });
});

// Handle Farmer Login Form submission
document.getElementById('farmer-login').addEventListener('click', () => {
    const farmerForm = document.getElementById('farmer-form');
    const formData = new FormData(farmerForm);
    
    const email = formData.get('email');
    const password = formData.get('password');
    
    alert(`Farmer logged in with email: ${email}`);
});

// Handle User Login Form submission
document.getElementById('user-login').addEventListener('click', () => {
    const userForm = document.getElementById('user-form');
    const formData = new FormData(userForm);
    
    const email = formData.get('email');
    const password = formData.get('password');
    
    alert(`User logged in with email: ${email}`);
});

// Function to handle farmer login/register
function handleFarmerAuth(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    alert(`Farmer logged in with email: ${email}`);
}

// Function to handle adding new milk products
function addMilkProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productName = formData.get('productName');
    const quantity = formData.get('quantity');
    const price = formData.get('price');
    const description = formData.get('description');
    alert(`Added Milk Product: ${productName}, Quantity: ${quantity}, Price: $${price}`);
}

// Handle Update Animal Form Submission
document.getElementById('update-animal-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting normally

    // Use FormData to fetch entered data
    const formData = new FormData(event.target);
    const animalType = formData.get('animalType');
    const breed = formData.get('breed');
    const price = formData.get('price');

    // You can now handle the data, for example:
    alert(`Animal Updated: Type - ${animalType}, Breed - ${breed}, Price - $${price}`);
});

// Handle Confirm Order Button Click
document.getElementById('confirm-order').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent form from submitting normally

    const orderId = document.querySelector('input[name="orderId"]').value;

    // Handle confirmation logic
    alert(`Order Confirmed! Order ID: ${orderId}`);
});

// Handle Reject Order Button Click
document.getElementById('reject-order').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent form from submitting normally

    const orderId = document.querySelector('input[name="orderId"]').value;

    // Handle rejection logic
    alert(`Order Rejected! Order ID: ${orderId}`);
});


// Function to handle user login/register
function handleUserAuth(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    alert(`User logged in with email: ${email}`);
}
document.querySelector("#user-auth-form").addEventListener("submit", handleUserAuth);


// Function to add an animal to the cart
function addToCart(event) {
    const animalName = event.target.parentElement.querySelector("h4").innerText;  // Get animal name
    const price = parseFloat(event.target.parentElement.querySelector("p").innerText.replace("Price: $", ""));  // Get price

    cart.push({ name: animalName, price: price });
    alert(`${animalName} added to cart.`);
}
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", addToCart);
});


// Function to handle checkout
function checkout(event) {
    event.preventDefault();
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Total amount due: $${total}`);
}
document.querySelector("#checkout-form").addEventListener("submit", checkout);


// Function to handle payment
function handlePayment(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const paymentMethod = formData.get("paymentMethod");
    alert(`Payment processed using: ${paymentMethod}`);
}
document.querySelector("#payment-form").addEventListener("submit", handlePayment);


// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    // Farmer authentication
    const farmerAuthForm = document.querySelector("#farmer form:nth-of-type(1)");
    farmerAuthForm.addEventListener("submit", handleFarmerAuth);

    // Add milk product
    const addMilkForm = document.querySelector("#farmer form:nth-of-type(2)");
    addMilkForm.addEventListener("submit", addMilkProduct);

    // User authentication
    const userAuthForm = document.querySelector("#user form:nth-of-type(1)");
    userAuthForm.addEventListener("submit", handleUserAuth);

    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll(".animal-item button");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const animalName = button.parentElement.querySelector("h4").innerText;
            const price = parseFloat(button.parentElement.querySelector("p:nth-of-type(2)").innerText.replace("Price: $", ""));
            addToCart(animalName, price);
        });
    });

    // Checkout
    const checkoutForm = document.querySelector("#user form:nth-of-type(3)");
    checkoutForm.addEventListener("submit", checkout);

    // Payment
    const paymentForm = document.querySelector("#user form:nth-of-type(4)");
    paymentForm.addEventListener("submit", handlePayment);
});




