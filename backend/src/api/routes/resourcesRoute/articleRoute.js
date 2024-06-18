const express = require("express");

const { getAllArticles, getAnArticle } = require("../../controllers/articleController/getAllArticles");
const { createArticle } = require("../../controllers/articleController/createArticle");
const { updateArticle } = require("../../controllers/articleController/updateArticle");
const { deleteArticle } = require("../../controllers/articleController/deleteArticle");
const { getArticleTags } = require("../../controllers/articleController/getArticleTags");
const { getCategorizedArticles } = require("../../controllers/articleController/getCategorizedArticles");

const router = express.Router();

router.post("/", createArticle); // create new article
router.get("/", getAllArticles); // fetch all articles
router.get("/categorizedArticles/:category", getCategorizedArticles); // fetch all articles according to categories
router.get("/articleTags", getArticleTags); // fetch all article tags
router.get("/anArticle/:id", getAnArticle); // fetch an article
router.put("/:id", updateArticle); // update article
router.delete("/:id", deleteArticle); // delete article

module.exports = router;
