import db from './db.js';

export const getAllUsers = () => {
  return db.query('SELECT * FROM users');
};

export const getUserById = (id) => {
  return db.query('SELECT * FROM users WHERE id = $1', [id]);
};

export const createUser = (userData) => {
  const { name, email, password_hash, phone, address, city, country, postal_code } = userData;
  return db.query(
    'INSERT INTO users (name, email, password_hash, phone, address, city, country, postal_code) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
    [name, email, password_hash, phone, address, city, country, postal_code]
  );
};

export const updateUser = (id, userData) => {
  const { name, email, password_hash, phone, address, city, country, postal_code } = userData;
  return db.query(
    'UPDATE users SET name = $1, email = $2, password_hash = $3, phone = $4, address = $5, city = $6, country = $7, postal_code = $8, updated_at = NOW() WHERE id = $9 RETURNING *',
    [name, email, password_hash, phone, address, city, country, postal_code, id]
  );
};

export const deleteUser = (id) => {
  return db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
};