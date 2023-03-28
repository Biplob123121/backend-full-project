const express = require('express');
const router = express.Router();
const storeController = require('../controllers/store.controller');


router.get('/', storeController.getAllStores);
router.post('/', storeController.createStore);
router.patch('/:id', storeController.updateStore);


module.exports = router;