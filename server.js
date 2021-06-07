const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("express-flash");
const bcrypt = require("bcrypt");
const path = require("path");

app.use(express.static(__dirname + "/client" + "/static"));
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.json());
app.use(flash());
app.use(session({
    secret: "hehe",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.set("view engine", "ejs");
app.set("views", __dirname + "/client/views");

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});



app.listen(5000, () => console.log("Listening on port 5000"));