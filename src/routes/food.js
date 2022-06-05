const express = require("express");
const imageUpload=require("../middlewares/imageUpload.js")
const food = require("../controllers/food");
const multer = require('multer');

const routes = express.Router();

routes.route("/foods")
    .post(imageUpload.single("img"),food.create)
    .get(food.list)

routes.route("/foods/:id")
    .get(food.read)
    .patch(food.update)
    .delete(food.delete)

module.exports = routes;
