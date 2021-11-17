const mongoose = require("mongoose");

const category = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

mongoose.model("Category", category);
