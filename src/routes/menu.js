const express = require("express");
const menu = require("../controllers/menu");
const imageUpload=require("../middlewares/imageUpload.js")
const routes = express.Router();

routes.route("/menus")
    .post(imageUpload.single("img"),menu.create)
    .get(menu.list)


routes.route("/menus/:id")
    .get(menu.read)
    .patch(menu.update)
    .delete(menu.delete)

module.exports = routes;
