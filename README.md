# Animal Farm Marketplace

## Overview

The Animal Farm Marketplace is a web application designed to connect farmers with users looking to buy farm animals and animal products. Farmers can list their products and animals for sale, while users can browse, search, and purchase these items. The application includes features for authentication, product management, and order processing.

## Features

### Farmer Features
1. **Authentication**: Farmers can log in or register to manage their accounts.
2. **Add New Milk Products**: Farmers can add new milk products with details such as name, quantity, price, and description.
3. **Update and Edit Animals for Sale**: Farmers can update the details of animals they have for sale.
4. **Confirm / Reject Orders**: Farmers can manage incoming orders from users.

### User Features
1. **Authentication**: Users can log in or register to create an account.
2. **View All Listed Animals**: Users can browse all available animals for sale.
3. **Search for Products**: Users can search for specific animals or products.
4. **Add Products to Cart**: Users can add animals and products to their shopping cart.
5. **Checkout**: Users can review their cart and proceed to checkout.
6. **Payment**: Users can pay for their items using various payment methods, including M-Pesa.

## Technologies Used
- HTML
- CSS
- JavaScript
- JSON for data storage

## File Structure
``plaintext
AnimalFarmMarketplace/
├── index.html           # The main HTML page
├── receipts.css         # The CSS stylesheet
├── receipts.js          # The JavaScript file
└── images/
    └── cow_milk.jpg     # Sample image for a milk product
    └── goat_milk.jpg    # Sample image for a milk product

## Features Overview
## Farmer Section
- Login/Registration: Farmers can log in or register by providing their email and password.
- Add Milk Products: Farmers can add new milk products by entering product details like name, quantity, price, and description.
- Update Animals for Sale: Farmers can update details about animals they want to sell, including animal type, breed, and price.
- Confirm/Reject Orders: Farmers can confirm or reject orders based on the provided order ID.

## User Section
- Login/Registration: Users can log in or register by providing their email and password.
- View Listed Animals: Users can browse animals listed for sale, view details like name, breed, and price, and add animals to their cart.
- Checkout: Users can review their cart and proceed to checkout to view the total amount for the animals in the cart.
- Payment: Users can enter a payment method (e.g., M-Pesa) to pay for the animals.

## Features in the Code
- Tabs for Switching Sections: There are two main sections: Farmer and User, and users can switch between these tabs using buttons.
- Form Data Handling: The app uses FormData to capture and process form inputs such as login credentials and product information.
- Cart Management: Animals can be added to the cart by users, and a checkout page displays the total price of the selected animals.
- Order Management: Farmers can confirm or reject orders by order ID.

## Sample Data
The app simulates the following data:

- Farmers: Example farmers with a list of products and animals for sale.
- Users: Example users with a shopping cart.
- Orders: Example orders containing products and total amounts.

This data is currently hardcoded for demonstration purposes but could later be replaced with an actual backend.

## Future Enhancements
- Backend Integration: Implement a backend with a database to store farmers' and users' data.
- Payment Gateway: Integrate a real payment gateway like Stripe or M-Pesa for processing payments.
- Order Status Tracking: Add functionality for users to track the status of their orders.
- User Profiles: Allow users and farmers to view and edit their profiles.

## License