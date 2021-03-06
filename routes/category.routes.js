const express = require('express');

const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middlewares/auth.middleware');
const validateName = require('../middlewares/validateName');

const categoryRouter = express.Router();

categoryRouter.post('/categories', authMiddleware, validateName, categoryController.createCategory);

categoryRouter.get('/categories', authMiddleware, categoryController.getAllCategory);

module.exports = categoryRouter;
