import mongoose from "mongoose";
const schema = new mongoose.Schema({
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  }
});

const model = mongoose.models.Ban || mongoose.model("Ban", schema);

export default model
