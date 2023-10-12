const express = require("express")
const app = express()
const PORT = 3000



//Routers
const mainRouter = require('./routes/main')

app.use('/',mainRouter)

app.listen(PORT,() => {
    console.log('servidor puerto' + PORT)
})