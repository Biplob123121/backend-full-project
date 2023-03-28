const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brand.controller')


router.get('/', brandController.getAllBrands);
router.post('/', brandController.createBrand);
router.get('/:id', brandController.getBrandById);
router.patch('/:id', brandController.updateBrandById);


module.exports = router