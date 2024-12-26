import db from './db.js';

export const getAllProducts = () => {
  return db.query('SELECT * FROM products');
};

export const getProductById = (id) => {
  return db.query('SELECT * FROM products WHERE id = $1', [id]);
};

export const createProduct = (productData) => {
  const { name, description, category, brand, price, discount_percentage, stock, is_active } = productData;
  return db.query(
    'INSERT INTO products (name, description, category, brand, price, discount_percentage, stock, is_active) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
    [name, description, category, brand, price, discount_percentage, stock, is_active]
  );
};

export const updateProduct = (id, productData) => {
  const { name, description, category, brand, price, discount_percentage, stock, is_active } = productData;
  return db.query(
    'UPDATE products SET name = $1, description = $2, category = $3, brand = $4, price = $5, discount_percentage = $6, stock = $7, is_active = $8, updated_at = NOW() WHERE id = $9 RETURNING *',
    [name, description, category, brand, price, discount_percentage, stock, is_active, id]
  );
};

export const deleteProduct = (id) => {
  return db.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
};

export const getProductsByCategory = (category) => {
  return db.query('SELECT * FROM products WHERE category = $1', [category]);
};