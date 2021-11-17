const express = require("express");
const mongoose = require("mongoose");

const { MONGOURI } = require("./keys");

const app = express();
const PORT = process.env.PORT || 5000;

//require models
require("./models/post");
require("./models/category");
require("./models/comment");
// end require models

//mongodb
mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
  console.log("Error: " + error);
});

//routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("Home!");
});

app.get("/category", (req, res) => {
  res.send("Categories...");
});

app.use(express.json());
app.use(
  require("./routes/post"),
  require("./routes/category"),
  require("./routes/comment")
);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
