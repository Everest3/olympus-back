const Food = require('../models/food')
const Menu = require("../models/menu")
const {unlinkAsnc} = require('fs');
var mongoose = require('mongoose');


exports.list = async (req, res) => {
  try {
    let excludeFields=req.body?.exclude?.map(field=>"-"+field) ?? []
    const foods = await Food.find().select(excludeFields)
    res.send(foods)
  } catch (e) { 
    res.status(500).send(e)
  }
};

exports.create = async (req, res) => {
  let img=req?.file?.path?.split("public/").pop() ?? ""
  req.body.img=img
  let menuId =req.body?.menu ? mongoose.Types.ObjectId(req.body.menu ):"";
  
  req.body.menu=menuId
  let food = new Food(req.body);
  try {
    await Menu.findByIdAndUpdate(menuId, 
      {$push:{foods:food._id}},
      { new: true, useFindAndModify: false })
    await food.save();
    res.sendStatus(200)
  } catch (e) {
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
  let id = req.params.id;
  let img=req?.file?.path?.split("public/").pop() ?? ""
  req.body.img=img
  let menuId = mongoose.Types.ObjectId(req.body.menu);
  req.body.menu=menuId
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
    let food=await Food.findByIdAndDelete(id)
    if(!food) return res.sendStatus(404)
    let path="public/"+food.img
    console.log({path})
    await unlinkAsnc(path)
    res.sendStatus(200)
  } catch (e) {
    console.log({e})
    res.sendStatus(500)
  }
};
