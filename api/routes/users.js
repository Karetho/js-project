var express = require("express");
var router = express.Router();

const Users = require("../models/Users");

/* GET users listing. */
router.get("/", function(req, res, next) {
  Users.find()
    .then(users => {
      res.json({
        confirmation: "success",
        data: users
      });
    })
    .catch(err => {
      res.json({
        confirmation: "failed",
        message: err.message
      });
    });
});
router.post("/add", function(req, res) {
  Users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    login: req.body.login,
    password: req.body.password
  });
  res.send("user created");
});
module.exports = router;
