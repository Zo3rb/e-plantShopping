# Paradise Nursery

## Project Name
**Paradise Nursery** — Plant Shop Front-End Application

## Course
Developing Front-End Apps with React (React / Redux capstone project)

## Description
A responsive front-end e-commerce application for a plant shop called **Paradise Nursery**.
Users can browse a catalog of houseplants, view product details, add items to a shopping cart,
adjust quantities, remove items, and proceed through a checkout flow.

## Tech Stack
- React (Vite)
- Redux Toolkit (`cartSlice`, `productsSlice`)
- React Router DOM
- CSS

## Key Files
- `src/App.jsx` — Paradise Nursery landing page with company name and "Get Started" button
- `src/App.css` — background image for the landing page
- `src/components/AboutUs.jsx` — company details
- `src/components/ProductList.jsx` — product listing page
- `src/components/CartItem.jsx` — shopping cart page
- `src/features/cart/CartSlice.jsx` — cart reducers: `addItem()`, `removeItem()`, `updateQuantity()`

## Getting Started
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
```
