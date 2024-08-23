import mongoose from "mongoose";
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    Pattern: /09\d{9}/g,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    Pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\$|\&|\@|\#])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/g
  },
  role: {
    type: String,
    required: true,
    default:"ADMIN"
  },
  status:{
    type:Boolean,
    default:true
  },

  refreshToken: {
    type: String,
  },
});

const model = mongoose.models?.User || mongoose.model("User", schema);
export default model;
