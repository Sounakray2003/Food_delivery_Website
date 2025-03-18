// models/contestModel.js
const mongoose = require("mongoose");

const contestSchema = new mongoose.Schema({
  contestId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  platform: { type: String, required: true },
  startTime: { type: Date, required: true },
  duration: { type: Number, required: true },
  url: { type: String, required: true },
  isBookmarked: { type: Boolean, default: false },
  solutionLink: { type: String, default: "" },
});

module.exports = mongoose.model("Contest", contestSchema);