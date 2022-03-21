// deveria ter usado sevice em todos os controllers mas so lembrei agr :(

  const { Category } = require('../models');

 const verifyCategoryIds = (categoryIds) => {
   const category = categoryIds.map(async (id) => Category.findAll({ where: { id } }));

   return Promise.all(category);
 };

 module.exports = {
   verifyCategoryIds,
 };