const express = require("express");
const { createAuthor } = require("../../controllers/authorController/createAuthor");

const router = express.Router();

router.post("/", createAuthor);  // register new author

module.exports = router;