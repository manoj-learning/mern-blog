const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");

const Comment = mongoose.model("Comment");

router.get("/comment/all", (req, res) => {
  Comment.find()
    .populate("post", "_id title")
    .then((comments) => {
      res.json({
        comments: comments,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/comment/add", (req, res) => {
  const { body, post } = req.body;

  if (!body || !post) {
    res.status(400).json({ error: "All fields are required" });
  }

  const comment = new Comment(req.body);

  comment
    .save()
    .then((createdcomment) => {
      res.status(201).json({
        message: "Comment Created",
        comment: createdcomment,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
