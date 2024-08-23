import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  tableID: {
    type: Number,
    required: true,
  }
});

const model =
  mongoose.models.Reservation || mongoose.model("Reservation", Schema);

export default model;
