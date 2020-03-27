const express = require('express')
const app = express()

const PORT. = process.env.PORT || 3000

// creates the public folder as route path
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout:

}))

module.exports = 