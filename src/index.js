const express = require("express");
const menu = require("./routes/menu");
const food = require("./routes/food");
const app = express();
require("./db/db")
const helmet = require("helmet");

app.use(helmet());
app.use(express.json());
app.use(menu);
app.use(food);
app.get("/", (req, res) => {
  res.send("hello bitch");
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
