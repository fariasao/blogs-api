const { Category } = require('../models');

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
  
    const create = await Category.create({ name }); // ! errei o create com C 38 vezes, obrigado a todas letras maiusculas k
  
    return res.status(201).json(create);
  } catch (e) {
    return next(e);
  }
};

const getAllCategory = async (req, res, next) => {
  try {
    const categories = await Category.findAll();

    return res.status(200).json(categories);
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  createCategory,
  getAllCategory,
};