import * as paymentModel from '../models/payments.js';

export const getAllPayments = async (req, res, next) => {
  try {
    const result = await paymentModel.getAllPayments();
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const getPaymentById = async (req, res, next) => {
  try {
    const result = await paymentModel.getPaymentById(req.params.id);
    if (result.rows.length === 0) {
      res.status(404).json({ message: 'Payment not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    next(error);
  }
};

export const createPayment = async (req, res, next) => {
  try {
    const result = await paymentModel.createPayment(req.body);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updatePayment = async (req, res, next) => {
  try {
    const result = await paymentModel.updatePayment(req.params.id, req.body);
    if (result.rows.length === 0) {
      res.status(404).json({ message: 'Payment not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    next(error);
  }
};

export const deletePayment = async (req, res, next) => {
  try {
    const result = await paymentModel.deletePayment(req.params.id);
    if (result.rows.length === 0) {
      res.status(404).json({ message: 'Payment not found' });
    } else {
      res.json({ message: 'Payment deleted successfully' });
    }
  } catch (error) {
    next(error);
  }
};

export const getPaymentsByOrder = async (req, res, next) => {
  try {
    const result = await paymentModel.getPaymentsByOrder(req.params.orderId);
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};