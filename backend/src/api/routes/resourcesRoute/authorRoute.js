const express = require("express");
const { createAuthor } = require("../../controllers/authorController/createAuthor");
const { getAllAuthors, getAuthorInfo } = require("../../controllers/authorController/getAllAuthors");

const router = express.Router();

router.post("/", createAuthor);  // register new author
router.get("/", getAllAuthors);  // receive all authors
router.get("/get-authorInfo/:authorId", getAuthorInfo); //get author info

module.exports = router;