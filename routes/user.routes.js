const express = require('express');

const validateBody = require('../middlewares/validateBody');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/auth.middleware');

const userRouter = express.Router();

userRouter.post('/', validateBody, userController.createUser);

userRouter.get('/', authMiddleware, userController.getAllUsers);

module.exports = userRouter;
