const mongoose  = require("mongoose");

const ConnectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect(process.env.main_URL);
    }
  } catch (err) {
  }
};
export default ConnectToDB