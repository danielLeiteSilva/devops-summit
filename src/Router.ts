import express, { Router } from'express';
const router: Router = express.Router();

import ProductController from './Controllers/ProductController';

const productController: ProductController = new ProductController();

router.post('/api/v1/product', productController.register);
router.get('/api/v1/product/all', productController.listAll);
router.get('/api/v1/product/:id', productController.getOne);
router.put('/api/v1/product/:id', productController.update);
router.delete('/api/v1/product/:id', productController.delete);

export default router