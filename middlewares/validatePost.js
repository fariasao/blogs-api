const postSchema = require('../schemas/postSchema');

const validatePost = async (req, _res, next) => {
  try {
    await postSchema.validateAsync(req.body);
    
    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = validatePost;