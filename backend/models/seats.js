const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
  no: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("seats", seatSchema);
