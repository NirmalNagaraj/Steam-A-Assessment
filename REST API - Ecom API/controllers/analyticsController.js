import * as analyticsModel from '../models/analytics.js';

export const getTopSellingProducts = async (req, res, next) => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    const result = await analyticsModel.getTopSellingProducts(limit);
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const getRevenueByCategoryAndDate = async (req, res, next) => {
  try {
    const { startDate, endDate } = req.query;
    if (!startDate || !endDate) {
      return res.status(400).json({ message: 'Start date and end date are required' });
    }
    const result = await analyticsModel.getRevenueByCategoryAndDate(startDate, endDate);
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const getUserOrderSummary = async (req, res, next) => {
  try {
    const result = await analyticsModel.getUserOrderSummary();
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const getPaymentMethodUsage = async (req, res, next) => {
  try {
    const result = await analyticsModel.getPaymentMethodUsage();
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};