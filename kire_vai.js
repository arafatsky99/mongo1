const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});
const kire_vaischema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    max: 100,
  },
  profession: String,
  address: addressSchema,
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

kire_vaischema.methods.kirevaifunc = function () {
  console.log(`Hi my name is ${this.name}`);
};

const kirevaimodel = mongoose.model("kire_vai", kire_vaischema);

const save_get_kirevai = async () => {
  const newKirevai = await kirevaimodel.create({
    name: "arafat" + Math.floor(Math.random() * 100),
    age: Math.floor(Math.random() * 100),
    profession: "Web And Mobile Apps Developer",
    address: {
      street: "78 Dharmapur",
      city: "Lakshmipur",
    },
  });
  newKirevai.kirevaifunc();
};

const kirevaiall = async () => {
  const kirefind = await kirevaimodel.find();
  return kirefind;
};

module.exports = { save_get_kirevai, kirevaiall };
