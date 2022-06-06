const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  img:{
    type:Buffer
  }
},{
  collection:"Menu",
  versionKey:false
});

MenuSchema.virtual("foods",{
  ref:"Food",
  localField:"_id",
  foreignField:"menu"
})

module.exports = mongoose.model("Menu", MenuSchema);
