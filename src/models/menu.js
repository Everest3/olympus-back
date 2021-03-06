const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique:true
  },
  foods:[{
    type:Schema.Types.ObjectId,
    ref:"Food",
  }]
},{
  collection:"Menu",
  versionKey:false
});


module.exports = mongoose.model("Menu", MenuSchema);
