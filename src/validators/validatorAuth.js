const { body } = require("express-validator");


module.exports ={  
  login: [
    body("email").notEmpty().withMessage("Debe completar con un email")
    .bail()
    .isEmail()
    .withMessage("Debe ser un email válido"),
    body("password").notEmpty().withMessage("Debe completar con una contraseña"),
  ],
  register: [
    body("firstName").notEmpty().withMessage("Debe completar este campo"),
    body("lastName").notEmpty().withMessage("Debe completar este campo"),
    body("email").notEmpty().withMessage("Debe completar este campo")
      .bail()
      .isEmail().withMessage("Debe ser un email válido"),
    body("DNI").notEmpty().withMessage("Debe completar este campo"),
    body("dateBorn").notEmpty().withMessage("Debe completar este campo"),
    body("password").notEmpty().withMessage("Debe completar este campo"),
    body("confirmPassword").notEmpty().withMessage("Debe completar este campo"),
  ],
}