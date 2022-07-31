const express = require("express");
const routes = express.Router();
const imageUpload = require("../middlewares/imageUpload.js")
const gallery = require("../controllers/gallery");

routes.route("/gallery")
  .get(gallery.getGalleryImages)
  .post(imageUpload.array("images", 40), gallery.postGalleryImages)
  .delete(gallery.deleteGalleryImages)
module.exports = routes;