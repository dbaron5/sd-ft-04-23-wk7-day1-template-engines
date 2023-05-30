const express = require("express");
const router = express.Router();
const ejs = require("ejs");

router.get("/display_all_employees", (req, res) => {
  res.render("./dashboard/dashboard.ejs");
});

module.exports = router;
