const Food = require('../models/food')
var mongoose = require('mongoose');


exports.list = async (req, res) => {
  try {
    console.log(req.body?.exclude)
    let excludeFields=req.body?.exclude?.map(field=>"-"+field) ?? []
    const foods = await Food.find().select(excludeFields)
    res.send(foods)
  } catch (e) { 
    console.log({e})
    res.status(500).send(e)
  }
};

exports.create = async (req, res) => {
  let img=req?.file?.path?.split("public/").pop() ?? ""
  req.body.img=img
  let menuId = mongoose.Types.ObjectId(req.body.menu);
  req.body.menu=menuId
  let food = new Food(req.body);
  try {
    await food.save();
    res.sendStatus(200)
  } catch (e) {
    console.log({e})
    res.sendStatus(400)
  }
};

exports.read = async (req, res) => {
  let id = req.params.id
  try {
    let food = await Food.findById(id)
    if (!food) return res.sendStatus(404)
    res.send(food)
  } catch (e) {
    res.sendStatus(500)
  }
};

exports.update = async (req, res) => {
  let id = req.params.id
  try {
    let food = await Food.findByIdAndUpdate(id, req.body)
    if (!food) return res.sendStatus(404)
    res.sendStatus(200)
  } catch (e) {
    res.sendStatus(500)
  }
};

exports.delete = async (req, res) => { 
  let id=req.params.id
  try {
    await Food.findByIdAndDelete(id)
    res.sendStatus(200)
  } catch (e) {
    res.sendStatus(500)
  }
};
