const postService = require('../services/postService');
const { BlogPost, User, Category } = require('../models');

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

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await BlogPost.findAll({
      include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', attributes: { exlude: ['PostsCategory'] } },
    ] });
  
    return res.status(200).json(posts); 
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  createPost,
  getAllPosts,
};