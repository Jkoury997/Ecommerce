const { Router} = require('express');
const router = Router()

//Routers
const frontendRouter = require("./frontend/frontendRouter")

router.use('/',frontendRouter)


module.exports = router