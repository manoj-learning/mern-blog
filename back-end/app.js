const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

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

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
