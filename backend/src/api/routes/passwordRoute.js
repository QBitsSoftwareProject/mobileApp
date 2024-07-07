const express = require("express");
const {
  updatePassword,
} = require("../controllers/passwordController/updatePassword");

const router = express.Router();

router.post("/update-password", updatePassword);

module.exports = router;
