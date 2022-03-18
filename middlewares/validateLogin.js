const loginSchema = require('../schemas/loginSchema');

const validateLogin = async (req, _res, next) => {
  try {
    await loginSchema.validateAsync(req.body);
    return next();
  } catch (e) {
    return next(e);
    }
};

module.exports = validateLogin;
