import express from 'express';
import dotenv from 'dotenv';
import usersRouter from './routes/users.js';
import productsRouter from './routes/products.js';
import ordersRouter from './routes/orders.js';
import orderItemsRouter from './routes/orderItems.js';
import paymentsRouter from './routes/payments.js';
import analyticsRouter from './routes/analytics.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/order-items', orderItemsRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/analytics', analyticsRouter);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});