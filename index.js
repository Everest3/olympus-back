const express = require("express");
const menu = require("./src/routes/menu");
const food = require("./src/routes/food");
const app = express();

app.use(express.json());
app.use(menu);
app.use(food);
app.get("/", (req, res) => {
  res.send("hello bitch");
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
