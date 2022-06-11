const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  img: String,
  menu:{
      type:Schema.Types.ObjectId,
      ref:"Menu",
  },
  price:{
    type:String,
    required:true
  }
},{
  collection:"Food",
  versionKey:false
});


module.exports = mongoose.model("Food", FoodSchema);
