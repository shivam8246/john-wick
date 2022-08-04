const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    email: { type: String, default: "" },
    mobileNumber: { type: String, default: "" },
    portfolio: { type: String, default: "" },
    address: { type: String, default: "" },
    careerObjective: { type: String, default: "" },
    education: { type: Array, default: [] },
    skills: { type: Array, default: [] },
    experiance: { type: Array, default: [] },
    projects: { type: Array, default: [] },
  },
  {
    timestamps: true,
  }
);
const userMOdel = mongoose.model("users", userSchema);
module.exports = userMOdel;
