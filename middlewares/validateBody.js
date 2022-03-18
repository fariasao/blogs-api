// igual projeto passado
const userSchema = require('../schemas/userSchema');

const validateBody = async (req, _res, next) => {
  try {
    await userSchema.validateAsync(req.body);
    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = validateBody;