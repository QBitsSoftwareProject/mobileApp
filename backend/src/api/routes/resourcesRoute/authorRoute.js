const express = require("express");

const adminAuth = require("../../middlewares/adminAuth");

const { createAuthor } = require("../../controllers/authorController/createAuthor");
const { getAllAuthors, getAuthorInfo } = require("../../controllers/authorController/getAllAuthors");
const { deleteArticle } = require("../../controllers/articleController/deleteArticle");

const router = express.Router();

router.post("/", adminAuth, createAuthor);  // register new author
router.get("/", getAllAuthors);  // receive all authors
router.get("/get-authorInfo/:authorId", getAuthorInfo); //get author info

module.exports = router;