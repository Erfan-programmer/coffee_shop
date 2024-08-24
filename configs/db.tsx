const mongoose  = require("mongoose");

const ConnectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect("mongodb://localhost:27017/king-coffee");
    }
  } catch (err) {
  }
};
export default ConnectToDB