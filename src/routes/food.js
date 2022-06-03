const express = require("express");
const food = require("../controllers/food");

const routes = express.Router();

routes.route("/foods")
    .post(food.create)
    .get(food.list)

routes.route("/foods/:id")
    .get(food.read)
    .patch(food.update)
    .delete(food.delete)

module.exports = routes;
