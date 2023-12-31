const mongoose = require("mongoose");

const nargiSchema = new mongoose.Schema({
  name: String,
});

const nargismodel = mongoose.model("nargis", nargiSchema);

const nargisdata = async () => {
  const nargisall = await nargismodel.find();
  console.log(nargisall);
};

const newnargis = new nargismodel({
  name: "arafat",
});

//newnargis.save();

module.exports = { nargisdata };
