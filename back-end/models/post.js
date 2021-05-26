const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const post = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  category: {
    type: ObjectId,
    ref: "Category",
  },
  numberOfLikes: {
    type: Number,
    default: 0,
  },
});

mongoose.model("Post", post);
