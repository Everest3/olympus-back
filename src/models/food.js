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
  }
});

module.exports = mongoose.model("Food", FoodSchema);
