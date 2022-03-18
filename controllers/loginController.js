const jwt = require('../helpers/jwtGenerator');
const { User } = require('../models');

const newLogin = async (req, res, next) => {
  try {
    const { email } = req.body;
  
    const existEmail = await User.findOne({ where: { email } });
    if (!existEmail) return res.status(400).json({ message: 'Invalid fields' });
  
    const token = jwt({ id: existEmail.dataValues.id, email });
    return res.status(200).json({ token });
  } catch (e) {
    return next(e);
  }
};

module.exports = { 
  newLogin,
 };