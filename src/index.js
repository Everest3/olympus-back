const express = require("express");
var path = require('path');
const menu = require("./routes/menu");
const food = require("./routes/food");
const app = express();
require("./db/db")
const helmet = require("helmet");
var cors = require('cors')
const port = process.env.PORT || 3000

app.options('*', cors()) 
app.use(cors())
app.use(express.static('public')); 
app.use('public/images', express.static('images'));
app.use(helmet());
app.use(express.json());

app.use(menu);
app.use(food);process.env.DB_HOST
app.listen(port, () => {
  console.log("Server is running at port " + port);
});
