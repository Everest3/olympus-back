const Menu = require('../models/menu')
const Food = require('../models/food')


exports.list = async (req, res) => {
  try {
    let excludeFields=req.body?.exclude.map(field=>"-"+field) ?? []
    const menus = await Menu.find({}).select(excludeFields)
    res.send(menus)
  } catch (e) {
    res.status(500).send(e)
  }
};

exports.create = async (req, res) => {
  req.body.img=req.file.buffer
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
    let menu = await Menu.findById(id).populate("foods").exec()
    if (!menu) return res.sendStatus(404)
    res.send(menu)
  } catch (e) {
    console.log({e})
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
  try {
    await Menu.findByIdAndDelete(id)
    res.sendStatus(200)
  } catch (e) {
    res.sendStatus(500)
  }
};
