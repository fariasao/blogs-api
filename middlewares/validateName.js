const nameSchema = require('../schemas/nameSchema');

const validateName = async (req, res, next) => {
  try {
    await nameSchema.validateAsync(req.body);

    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = validateName;