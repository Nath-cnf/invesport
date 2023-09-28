const express = require("express");
const session = require("express-session");
const app = express();

require("dotenv").config()

app.use(express.static("app/public"));
app.use("/node-modules/", express.static("node_modules"))

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60,
        sameSite: 'strict',
        httpOnly: 'true'
    }
}))

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

var rotas = require("./app/routes/router");
app.use("/", rotas);

app.listen(process.env.PORT, () => {
    console.log(`Servidor ouvindo na porta http://localhost:${process.env.PORT}`);
});