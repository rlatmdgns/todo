var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.send({ text: "Hello" });
});

module.exports = router;
