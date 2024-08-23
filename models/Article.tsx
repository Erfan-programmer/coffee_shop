import mongoose from "mongoose";
require("./User");
require("./Category");
const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  CategoryID: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  dateSent: {
    type: Date,
    default: () => Date.now(),
    immutable: false,
  },
  writer: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const model = mongoose.models.Article || mongoose.model("Article", Schema);

export default model;
