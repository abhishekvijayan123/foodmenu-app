
const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ["food", "drinks", "brunch"],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("MenuItem", menuItemSchema);
