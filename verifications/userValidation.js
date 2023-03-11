const Joi = require("joi");

const userValidation = (data) => {
  const registration = Joi.object({
    idNumber: Joi.number().integer(),
    firstName: Joi.string().min(3).max(25).required(),
    lastName: Joi.string().min(3).max(25),
    dateOfBirth: Joi.string().required(),
    licenceNo:Joi.number().integer().required(),
    contact: Joi.string().required(),
    city:Joi.string().max(30).required(),
    presAddress:Joi.string().max(30).required(),
    permAddress:Joi.string().max(30).required()
        
  });
  const valid = registration.validate(data);
  return valid;



  
};


// const userLogin = (data)=>{
//     const login = Joi.object({
//         _id: Joi.number().integer(),
//         password:Joi.string().min(8).max(20).required()
//     });
//     const validate = login.validate(data);
//     return validate;
// }
// module.exports = userLogin

module.exports= userValidation;