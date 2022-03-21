const postService = require('../services/postService');
const { BlogPost } = require('../models');

const createPost = async (req, res, next) => {
  try {
    const { title, categoryIds, content } = req.body;
    const { id } = req.tokenData; 
    
    const verify = await postService.verifyCategoryIds(categoryIds);

    if (!verify.every((array) => array.length > 0)) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }

    const newPost = await BlogPost.create({ 
      title, content, userId: id, published: new Date(), updated: new Date() });
    return res.status(201).json(newPost);
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  createPost,
};