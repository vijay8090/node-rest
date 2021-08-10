const express = require("express");
const router = express.Router();
const employees = require("./data/employees.js");

router.get("/", (req, res) => {
  res.send("App is running");
});

router.get("/employees", (req, res) => {
  res.status(200).json(employees);
});

module.exports = router;
