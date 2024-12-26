import db from './db.js';

export const getAllOrders = () => {
  return db.query('SELECT * FROM orders');
};

export const getOrderById = (id) => {
  return db.query('SELECT * FROM orders WHERE id = $1', [id]);
};

export const createOrder = (orderData) => {
  const { user_id, total_amount, payment_status, delivery_status } = orderData;
  return db.query(
    'INSERT INTO orders (user_id, total_amount, payment_status, delivery_status) VALUES ($1, $2, $3, $4) RETURNING *',
    [user_id, total_amount, payment_status, delivery_status]
  );
};

export const updateOrder = (id, orderData) => {
  const { total_amount, payment_status, delivery_status } = orderData;
  return db.query(
    'UPDATE orders SET total_amount = $1, payment_status = $2, delivery_status = $3, updated_at = NOW() WHERE id = $4 RETURNING *',
    [total_amount, payment_status, delivery_status, id]
  );
};

export const deleteOrder = (id) => {
  return db.query('DELETE FROM orders WHERE id = $1 RETURNING *', [id]);
};

export const getOrdersByUser = (userId) => {
  return db.query('SELECT * FROM orders WHERE user_id = $1', [userId]);
};