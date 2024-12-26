import * as orderModel from '../models/orders.js';

export const getAllOrders = async (req, res, next) => {
  try {
    const result = await orderModel.getAllOrders();
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const getOrderById = async (req, res, next) => {
  try {
    const result = await orderModel.getOrderById(req.params.id);
    if (result.rows.length === 0) {
      res.status(404).json({ message: 'Order not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    next(error);
  }
};

export const createOrder = async (req, res, next) => {
  try {
    const result = await orderModel.createOrder(req.body);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updateOrder = async (req, res, next) => {
  try {
    const result = await orderModel.updateOrder(req.params.id, req.body);
    if (result.rows.length === 0) {
      res.status(404).json({ message: 'Order not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    next(error);
  }
};

export const deleteOrder = async (req, res, next) => {
  try {
    const result = await orderModel.deleteOrder(req.params.id);
    if (result.rows.length === 0) {
      res.status(404).json({ message: 'Order not found' });
    } else {
      res.json({ message: 'Order deleted successfully' });
    }
  } catch (error) {
    next(error);
  }
};

export const getOrdersByUser = async (req, res, next) => {
  try {
    const result = await orderModel.getOrdersByUser(req.params.userId);
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};