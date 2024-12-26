import * as productModel from '../models/products.js';

export const getAllProducts = async (req, res, next) => {
  try {
    const result = await productModel.getAllProducts();
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const result = await productModel.getProductById(req.params.id);
    if (result.rows.length === 0) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const result = await productModel.createProduct(req.body);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const result = await productModel.updateProduct(req.params.id, req.body);
    if (result.rows.length === 0) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const result = await productModel.deleteProduct(req.params.id);
    if (result.rows.length === 0) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.json({ message: 'Product deleted successfully' });
    }
  } catch (error) {
    next(error);
  }
};

export const getProductsByCategory = async (req, res, next) => {
  try {
    const result = await productModel.getProductsByCategory(req.params.category);
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};