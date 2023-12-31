const mongoose = require("mongoose");
const connectmongodb = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/kowsik");
};

module.exports = { connectmongodb };
