import express from 'express';
import * as productsController from '../controllers/productsController.js';

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);
router.post('/', productsController.createProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);
router.get('/category/:category', productsController.getProductsByCategory);

export default router;