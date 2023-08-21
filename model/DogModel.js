// models/Dog.js
const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  dobDay: {
    type: Number,
    // required: [true, "Please add Your Date of Birth"],
  },
  dobMonth: {
    type: Number,
    // required: [true, "Please add Your Date of Birth"],
  },
  dobYear: {
    type: Number,
    // required: [true, "Please add Your Date of Birth"],
  },
  showGender: {
    type: String,
    // required: [true, "Please add Address"],
  },
  genderId: {
    type: String,
    // required: [true, "Please add Address"],
  },
  genderInterest: {
    type: String,
    // required: [true, "Please add Address"],
  },
  matches: {
    type: Array,
    // required: [true, "Please add Matches"],
  },
  sex: {
    type: String,
    enum: ["male", "female"],
    default: "male",
  },
  photo: {
    type: String,
  },
  EnergyLevel: {
    type: String,
    enum: ["active", "laid-back"],
    default: "active",
  },
  Friendliness: {
    type: String,
    enum: ["outgoing", "affectionate", "reserved", "voilent"],
    default: "outgoing",
  },
  Playfulness: {
    type: String,
    enum: ["true", "false"],
  },
  Aggressiveness: {
    type: String,
    enum: ["true", "false"],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // Add more fields as needed, e.g., personality traits, photos, etc.
});

module.exports = mongoose.model("Dog", dogSchema);
