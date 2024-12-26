# E-commerce Backend

This is a Node.js backend application for an e-commerce platform using Express.js and PostgreSQL.

## Features

- RESTful API for managing users, products, orders, order items, and payments
- PostgreSQL database integration
- Basic CRUD operations for all entities
- Analytical routes with complex queries using joins

## API Endpoints

### Users
- GET /api/users
- GET /api/users/:id
- POST /api/users
- PUT /api/users/:id
- DELETE /api/users/:id

### Products
- GET /api/products
- GET /api/products/:id
- POST /api/products
- PUT /api/products/:id
- DELETE /api/products/:id
- GET /api/products/category/:category

### Orders
- GET /api/orders
- GET /api/orders/:id
- POST /api/orders
- PUT /api/orders/:id
- DELETE /api/orders/:id
- GET /api/orders/user/:userId

### Order Items
- GET /api/order-items
- GET /api/order-items/:id
- POST /api/order-items
- PUT /api/order-items/:id
- DELETE /api/order-items/:id

### Payments
- GET /api/payments
- GET /api/payments/:id
- POST /api/payments
- PUT /api/payments/:id
- DELETE /api/payments/:id
- GET /api/payments/order/:orderId

### Analytics
- GET /api/analytics/top-selling-products
- GET /api/analytics/revenue-by-category
- GET /api/analytics/user-order-summary
- GET /api/analytics/payment-method-usage
