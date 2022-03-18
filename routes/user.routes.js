const express = require('express');

const validateBody = require('../middlewares/validateBody');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/', validateBody, userController.createUser);

module.exports = userRouter;
