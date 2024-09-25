const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/employee.controller')

router.get('/first', ctrl.getFirstEmployee);
router.get('/create-template', ctrl.getCreateEmployeeTemplate);
router.post('/create', ctrl.createEmployee);

module.exports = router;