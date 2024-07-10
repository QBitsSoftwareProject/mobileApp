const express = require("express");

const auth = require("../../middlewares/auth");
const adminAuth = require("../../middlewares/adminAuth");

const {
  createAuthor,
} = require("../../controllers/authorController/createAuthor");
const {
  getAllAuthors,
  getAuthorInfo,
} = require("../../controllers/authorController/getAllAuthors");
const {
  deleteArticle,
} = require("../../controllers/articleController/deleteArticle");

const router = express.Router();

router.post("/", auth, adminAuth, createAuthor); // register new author
router.get("/", auth, getAllAuthors); // receive all authors
router.get("/get-authorInfo/:authorId", auth, getAuthorInfo); //get author info

module.exports = router;
