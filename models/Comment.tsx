import mongoose from "mongoose";
require("./Product");
const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: () => Date.now(),
    immutable: false,
  },
  star: {
    type: Number,
    required: true,
  },
  productID: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
  },

  isAccept: {
    type: Boolean,
    default: false,
  },
});
const model = mongoose.models.Comment || mongoose.model("Comment" , schema)
export default model