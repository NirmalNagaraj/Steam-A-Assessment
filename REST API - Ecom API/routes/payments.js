import express from 'express';
import * as paymentsController from '../controllers/paymentsController.js';

const router = express.Router();

router.get('/', paymentsController.getAllPayments);
router.get('/:id', paymentsController.getPaymentById);
router.post('/', paymentsController.createPayment);
router.put('/:id', paymentsController.updatePayment);
router.delete('/:id', paymentsController.deletePayment);
router.get('/order/:orderId', paymentsController.getPaymentsByOrder);

export default router;