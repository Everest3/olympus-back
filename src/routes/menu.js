const express = require("express");

const routes = express.Router();

routes.route("/").get((req, res) => {
  res.status(200).send("all menus");
});

routes
  .route("/menu/:id")
  .post((req, res) => {
    res.status(200).send("post menu");
  })
  .get((req, res) => {
    let id = req.params.id;
    res.status(200).send("menu with id" + id);
  });

module.exports = routes;
