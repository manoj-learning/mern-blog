const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");
const { route } = require("./category");
const Post = mongoose.model("Post");

router.get("/posts", (req, res) => {
  Post.find()
    .populate("category", "_id name")
    .then((posts) => {
      res.json({
        posts: posts,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/posts/trending", (req, res) => {
  Post.find()
    .sort({ numberOfLikes: -1 })
    .populate("category", "_id name")
    .then((posts) => {
      res.json({
        trending: posts,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/posts/latest", (req, res) => {
  Post.find()
    .sort({ _id: -1 })
    .limit(3)
    .populate("category", "_id name")
    .then((posts) => {
      res.json({
        latest: posts,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/posts/add", (req, res) => {
  const { title, description, imageUrl, category, numberOfLikes } = req.body;

  if (!title || !description || !imageUrl) {
    res.status(400).json({ error: "All fields are required" });
  }

  const post = new Post({
    title,
    description,
    imageUrl,
    category,
    numberOfLikes,
  });

  post
    .save()
    .then((createdPost) => {
      res.status(201).json({
        message: "Post Created",
        post: createdPost,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

//router.get();

module.exports = router;
