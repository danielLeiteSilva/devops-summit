"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const ProductController_1 = __importDefault(require("./Controllers/ProductController"));
const productController = new ProductController_1.default();
router.post('/api/v1/product', productController.register);
router.get('/api/v1/product/all', productController.listAll);
router.get('/api/v1/product/:id', productController.getOne);
router.put('/api/v1/product/:id', productController.update);
router.delete('/api/v1/product/:id', productController.delete);
exports.default = router;
