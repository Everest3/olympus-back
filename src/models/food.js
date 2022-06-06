const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  img:{
    type:Buffer
  },
  menu:{
    type:Schema.Types.ObjectId,
    ref:"Menu",
    required:true
  }
},{
  collection:"Food",
  versionKey:false
});


module.exports = mongoose.model("Food", FoodSchema);
