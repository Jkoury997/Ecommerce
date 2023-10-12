const express = require("express")
const app = express()
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session")
const PORT = 3000



//middleweares
app.use(express.static(path.join(__dirname, "../public")));
app.use(methodOverride("_method"));
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(session({
  secret:"MkOnline",
  resave: false,
  saveUninitialized: false
})) 

//Routers
const mainRouter = require('./routes/main')
app.use('/',mainRouter)




// Template Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // Define la ubicación de la carpeta de las Vistas

//Inicio de servidor
app.listen(PORT, () => {
    console.log(`listening port ${PORT}`);
});