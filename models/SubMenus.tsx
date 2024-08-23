import mongoose from "mongoose";
import "./Image"; // Assuming this is the model file for the Image schema

const SubMenuSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: mongoose.Schema.Types.ObjectId, // Use mongoose.Schema.Types.ObjectId for clarity
    ref: "Image", // This references the Image model
    required: true,
  },
});

// Check if the model already exists to avoid overwriting it
const SubMenu = mongoose.models?.SubMenu || mongoose.model("SubMenu", SubMenuSchema);

export default SubMenu;
