const mongoose = require("mongoose");

exports.list = function (req, res) {
  let body = req.body;

  res.status(200).send(body);
};

exports.create = function (req, res) {
  let body = req.body;

  res.status(200).send(body);
};

exports.read = function (req, res) {};

exports.update = function (req, res) {};

exports.delete = function (req, res) {};
