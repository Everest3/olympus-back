import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Food", FoodSchema);
