const express = require('express');

const postController = require('../controllers/postController');
const validatePost = require('../middlewares/validatePost');
const authMiddleware = require('../middlewares/auth.middleware');

const postRouter = express.Router();

postRouter.post('/post', authMiddleware, validatePost, postController.createPost);

postRouter.get('/post', authMiddleware, postController.getAllPosts);

module.exports = postRouter;