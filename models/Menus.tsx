import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },

});
const model = mongoose.models?.Menus || mongoose.model("Menus", Schema);

export default model;
