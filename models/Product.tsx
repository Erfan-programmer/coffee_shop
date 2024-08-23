import { Mongoose } from "mongoose";
require("./Category");
require("./Comment");
require("./Image");
const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
  },
  scores: {
    type: Number,
    required: true,
    default: 0,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  price:{
    type:Number,
    required:true
  },
  labels: [
    {
      type: String,
      required: true,
    },
  ],
  img: {
    type: mongoose.Types.ObjectId,
    ref:"Image",
    required: true,
  },
  source: {
    type: Object
  },
  countAvailable: {
    type: String,
    default: 25,
  },
  comments: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Comment",
      }
    ]
  }
});

const model = mongoose.models.Product || mongoose.model("Product", schema);

export default model;
