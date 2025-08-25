const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// Home route
app.get("/", (req, res) => {
  res.render("index", { title: "My Admin Panel" });
});

// Server running
app.listen(3000, () => console.log("✅ Admin Panel is running on port 3000"));
