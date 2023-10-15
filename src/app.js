const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const PORT = 3000;

//middleweares
app.use(express.static(path.join(__dirname, "../public")));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "MkOnline",
    resave: false,
    saveUninitialized: false,
  })
);

//Routers
const mainRouter = require("./routes/main");
app.use("/", mainRouter);

// Template Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // Define la ubicación de la carpeta de las Vistas

//Inicio de servidor
app.listen(PORT, () => {
  console.log(`listening port ${PORT}`);
});

// conexion a base de datos

const { Sequelize } = require("sequelize");
const config = require("./database/config/config"); // Asegúrate de que la ruta es correcta

const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

// Configurando la conexión a la base de datos
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  }
);

// Verificar la conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a la base de datos establecida con éxito.");
  })
  .catch((err) => {
    console.error("No se pudo conectar a la base de datos:", err);
  });
