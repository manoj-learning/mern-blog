const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");
const Category = mongoose.model("Category");

router.get("/categories", (req, res) => {
  Category.find()
    .then((categories) => {
      res.json({
        categories,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/category/add", (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ error: "All fields are required" });
  }

  const category = new Category({
    name,
  });

  category
    .save()
    .then((createdCategory) => {
      res.status(201).json({
        message: "category Created",
        category: createdCategory,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
