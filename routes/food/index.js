const express = require("express");
const food = require("../../controllers/food");

const routes = express.Router();

routes.route("/food").post(food.create);

module.exports = routes;
