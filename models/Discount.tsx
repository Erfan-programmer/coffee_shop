const mongoose = require("mongoose");
require("./Product");
require("./User");

const schema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    maxUse: {
      type: Number,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
    productID: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    uses: {
      type: Number,
      default: 0,
    },
    user: {
      type: [
        {
          type: mongoose.Types.ObjectId,
          ref: "User",
        },
      ],
      default:[]
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models.Discount || mongoose.model("Discount", schema);

export default model;
