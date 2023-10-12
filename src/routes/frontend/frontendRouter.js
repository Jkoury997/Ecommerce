const { Router} = require('express');
const router = Router()

//Controllers

const frontendController = require("../../controllers/frontend/frontendController")

//validator

const validatorAuth = require("../../validators/validatorAuth")

//middleware

const validatiorForm = require("../../middlewares/validatorForm")

router.get('/',frontendController.home)

//Login
router.get('/login',frontendController.showLogin)
router.post("/login",validatorAuth.login,validatiorForm.login,frontendController.login)

// Register Minorista
router.get('/register',frontendController.showRegister)
router.post("/register",validatorAuth.login,validatiorForm.login,frontendController.register)


module.exports = router