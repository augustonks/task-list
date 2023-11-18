require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connectToDatabase = require("./database/db");

connectToDatabase();

const app = express();
const port = 8081;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // serve pra acessar um css diretamente de dentro do ejs por exemplo.
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () =>
    console.log(`server aberto em http://localhost:${port}/`)
);
