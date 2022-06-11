const Menu = require('../models/menu')
const Food = require('../models/food')
var mongoose = require('mongoose');


exports.list = async (req, res) => {
  try {
    let excludeFields=req.body?.exclude?.map(field=>"-"+field) ?? []
    let menus;
    if(req.body?.isSimple){
      menus = await Menu.find({}).select([...excludeFields,"-foods"])
    }else{
      menus=await Menu.find({}).select(excludeFields).populate('foods',"-menu").exec()
    }
    res.send(menus)
  } catch (e) {
    res.status(500).send(e)
  }
};

exports.create = async (req, res) => {
  let menu = new Menu(req.body);
  try {
    await menu.save();
    res.sendStatus(200)
  } catch (e) {
    res.sendStatus(400)

  }
};

exports.read = async (req, res) => {
  let id = req.params.id
  try {
    let menu;
    if(req.body?.isSimple){
      menu = await Menu.findById(id).select("-foods")
      return res.send(menu)
    }else{
      menu = await Menu.findById(id).populate('foods').exec((res))
    }
    if (!menu) return res.sendStatus(404)
    res.send(menu)
  } catch (e) {
    res.sendStatus(500)
  }
};

exports.update = async (req, res) => {
  let id = req.params.id
  try {
    let menu = await Menu.findByIdAndUpdate(id, req.body)
    if (!menu) return res.sendStatus(404)
    res.sendStatus(200)
  } catch (e) {
    res.sendStatus(500)
  }
};

exports.delete = async (req, res) => { 
  let id=req.params.id
  let deleteFoods=req?.body?.deleteFoods
  try {
    const result=await Menu.findByIdAndDelete(id)
    let foodIds=result.foods.map(food=>food._id)
      await Food.updateMany(
        { _id: { $in: foodIds } },
        { $set: { menu:"" } },
        {multi: true}
      );


    res.sendStatus(200)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
};
