const express = require('express');
const ProductController = require('../controllers/productController');
const StatusController = require('../controllers/statusController');
const authentication = require('../middleware/authentication');

const router = express.Router();
const productController = new ProductController();
const statusController = new StatusController();

router.get('/', statusController.getAllStatus);
router.get('/products', authentication, productController.getAllProducts);
router.get('/products/:code', authentication, productController.getProductByCode);
router.put('/products/:code', authentication, productController.updateProductByCode)
router.delete('/products/:code', authentication, productController.deleteProductByCode)
module.exports = router;