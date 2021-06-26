const express = require('express');
const router = express.Router();

const companyController = require('../controllers/company.controller');

router.get('/', companyController.list);
router.delete('/delete/:id', companyController.deleteById);
router.get('/find/:id', companyController.findById);
router.post('/create', companyController.create);


module.exports = router;
