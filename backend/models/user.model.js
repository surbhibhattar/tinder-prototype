const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    // profile_pic: { type: String },
    // additional_pics: { type: Array },
    bio: { type: String },
    occupation: { type: String },
    school: { type: String },
    city: { type: String },
    gender: { type: String },
    sexual_orientation: { type: String },
    // dob: { type: Date },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
