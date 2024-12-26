import express from 'express';
import * as ordersController from '../controllers/ordersController.js';

const router = express.Router();

router.get('/', ordersController.getAllOrders);
router.get('/:id', ordersController.getOrderById);
router.post('/', ordersController.createOrder);
router.put('/:id', ordersController.updateOrder);
router.delete('/:id', ordersController.deleteOrder);
router.get('/user/:userId', ordersController.getOrdersByUser);

export default router;