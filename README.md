# ShoppyGlobe E-commerce Application

## Project Overview

ShoppyGlobe is a basic e-commerce application built using React and Redux. This project demonstrates core React concepts, including component structuring, state management, API integration, routing, event handling, performance optimization, and responsive styling.

## Features

- **Product Listing**: Fetches and displays products from an external API.
- **Product Detail**: Shows detailed information about a selected product.
- **Shopping Cart**: Allows users to add, remove, and modify product quantities.
- **Search Functionality**: Enables users to filter products based on search queries.
- **Redux Integration**: Manages cart state globally.
- **Routing**: Implements React Router for seamless navigation.
- **Error Handling**: Manages API failures gracefully.
- **Performance Optimization**: Uses code splitting and lazy loading.
- **Responsive Design**: Ensures the application is user-friendly across all screen sizes.

## Technologies Used

- React
- Redux
- React Router
- Tailwind CSS / CSS Modules / Styled Components
- React Icons
- React Lazy & Suspense
- Fetch API

## Installation and Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/Sahil-Bhowmick/ShoppyGlobe
   ```
2. Navigate to the project folder:
   ```sh
   cd shoppyglobe
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open the application in the browser at `http://localhost:3000`.

## Project Structure

```
shoppyglobe/
│── public/
│── src/
│   │── components/
│   │   │── Header.js
│   │   │── ProductList.js
│   │   │── ProductItem.js
│   │   │── ProductDetail.js
│   │   │── Cart.js
│   │   │── CartItem.js
│   │── hooks/
│   │   │── useFetchProducts.js
│   │── redux/
│   │   │── store.js
│   │   │── cartSlice.js
│   │── pages/
│   │   │── Home.js
│   │   │── NotFound.js
│   │── App.js
│   │── index.js
│── package.json
│── README.md
```

## API Usage

- Products are fetched from: `https://dummyjson.com/products`

## Routes

| Route          | Description                    |
| -------------- | ------------------------------ |
| `/`            | Home page with product listing |
| `/product/:id` | Product detail page            |
| `/cart`        | Shopping cart page             |
| `*`            | 404 Not Found page             |

## State Management

- **Redux Toolkit** is used to manage the cart state.
- Actions: `addToCart`, `removeFromCart`, `updateQuantity`
- Selectors: Get total items, total price, and cart products.

## Performance Optimization

- Components are lazily loaded using `React.lazy` and `Suspense`.
- Efficient state updates and memoization where needed.

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit changes and push to GitHub.
4. Submit a pull request for review.

## Contact

For any issues or queries, reach out at [sahilbhowmick1@gmail.com](mailto:sahilbhowmick1@gmail.com).
