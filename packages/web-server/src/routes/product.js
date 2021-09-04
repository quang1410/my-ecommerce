const express = require('express');
const router = express.Router()

const productController = require('../controllers/productController')

router.get('/',productController.myApp)
router.put('/update-product/:id',productController.updateProduct)
router.delete('/delete-product/:id',productController.deleteProduct)
router.get('/get-product',productController.getProduct)
router.post('/create-product',productController.createProduct)

module.exports = router