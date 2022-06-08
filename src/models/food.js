const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  img: Buffer,
  menu:{
      type:Schema.Types.ObjectId,
      ref:"Menu",
  }
},{
  collection:"Food",
  versionKey:false
});


module.exports = mongoose.model("Food", FoodSchema);