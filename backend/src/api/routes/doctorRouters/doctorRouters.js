const express = require("express");
const { createDoctors } = require("../../controllers/doctorsController/createDoctors");

const router = express.Router();

router.post("/", createDoctors);

module.exports = router;