const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitySchema = new Schema(
  {
    user_id: { type: String, required: true },
    left_swiped: { type: Array },
    right_swiped: { type: Array },
    matches: { type: Array },
  },
  {
    timestamps: true,
  }
);

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
