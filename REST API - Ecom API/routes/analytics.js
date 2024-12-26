import express from 'express';
import * as analyticsController from '../controllers/analyticsController.js';

const router = express.Router();

router.get('/top-selling-products', analyticsController.getTopSellingProducts);
router.get('/revenue-by-category', analyticsController.getRevenueByCategoryAndDate);
router.get('/user-order-summary', analyticsController.getUserOrderSummary);
router.get('/payment-method-usage', analyticsController.getPaymentMethodUsage);

export default router;