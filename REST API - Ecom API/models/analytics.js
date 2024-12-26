import db from './db.js';

export const getTopSellingProducts = (limit = 10) => {
  return db.query(`
    SELECT p.id, p.name, p.category, SUM(oi.quantity) as total_quantity_sold, SUM(oi.total_price) as total_revenue
    FROM products p
    JOIN order_items oi ON p.id = oi.product_id
    JOIN orders o ON oi.order_id = o.id
    WHERE o.payment_status = 'Paid'
    GROUP BY p.id, p.name, p.category
    ORDER BY total_quantity_sold DESC
    LIMIT $1
  `, [limit]);
};

export const getRevenueByCategoryAndDate = (startDate, endDate) => {
  return db.query(`
    SELECT p.category, DATE_TRUNC('day', o.order_date) as date, SUM(oi.total_price) as daily_revenue
    FROM products p
    JOIN order_items oi ON p.id = oi.product_id
    JOIN orders o ON oi.order_id = o.id
    WHERE o.payment_status = 'Paid' AND o.order_date BETWEEN $1 AND $2
    GROUP BY p.category, DATE_TRUNC('day', o.order_date)
    ORDER BY p.category, date
  `, [startDate, endDate]);
};

export const getUserOrderSummary = () => {
  return db.query(`
    SELECT u.id, u.name, COUNT(o.id) as total_orders, SUM(o.total_amount) as total_spent,
           AVG(o.total_amount) as average_order_value
    FROM users u
    LEFT JOIN orders o ON u.id = o.user_id
    GROUP BY u.id, u.name
    ORDER BY total_spent DESC
  `);
};

export const getPaymentMethodUsage = () => {
  return db.query(`
    SELECT p.payment_method, COUNT(*) as usage_count, SUM(p.amount) as total_amount
    FROM payments p
    JOIN orders o ON p.order_id = o.id
    WHERE o.payment_status = 'Paid'
    GROUP BY p.payment_method
    ORDER BY usage_count DESC
  `);
};