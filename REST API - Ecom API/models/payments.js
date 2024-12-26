import db from './db.js';

export const getAllPayments = () => {
  return db.query('SELECT * FROM payments');
};

export const getPaymentById = (id) => {
  return db.query('SELECT * FROM payments WHERE id = $1', [id]);
};

export const createPayment = (paymentData) => {
  const { order_id, payment_method, payment_status, transaction_id, amount } = paymentData;
  return db.query(
    'INSERT INTO payments (order_id, payment_method, payment_status, transaction_id, amount) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [order_id, payment_method, payment_status, transaction_id, amount]
  );
};

export const updatePayment = (id, paymentData) => {
  const { payment_status, transaction_id } = paymentData;
  return db.query(
    'UPDATE payments SET payment_status = $1, transaction_id = $2 WHERE id = $3 RETURNING *',
    [payment_status, transaction_id, id]
  );
};

export const deletePayment = (id) => {
  return db.query('DELETE FROM payments WHERE id = $1 RETURNING *', [id]);
};

export const getPaymentsByOrder = (orderId) => {
  return db.query('SELECT * FROM payments WHERE order_id = $1', [orderId]);
};