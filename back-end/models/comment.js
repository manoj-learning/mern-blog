const mongoose = require("mongoose");
const comment = mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
});

mongoose.model("Comment", comment);
