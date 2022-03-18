const jwt = require('../helpers/jwtGenerator');
const { User } = require('../models');

const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    
    const existUser = await User.findOne({ where: { email } });
    
    if (existUser) return res.status(409).json({ message: 'User already registered' });

    const newUser = await User.create({ displayName, email, password, image });
    const token = jwt({ id: newUser.dataValues.id, email });
    
    return res.status(201).json({ token }); // token para validar email e senha
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  createUser,
};