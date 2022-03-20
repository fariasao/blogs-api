// lembrando joi conforme ultimo projeto e monitoria
const Joi = require('joi');

 const nameSchema = Joi.object({
  name: Joi.string().required(),  
});

module.exports = nameSchema; 