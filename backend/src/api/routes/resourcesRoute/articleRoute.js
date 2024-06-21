const express = require("express");

const { getAllArticles, getAnArticle, getAuthorArticles, getAllArticlesBySearch } = require("../../controllers/articleController/getAllArticles");
const { createArticle } = require("../../controllers/articleController/createArticle");
const { updateArticle } = require("../../controllers/articleController/updateArticle");
const { deleteArticle } = require("../../controllers/articleController/deleteArticle");
const { getArticleTags } = require("../../controllers/articleController/getArticleTags");
const { getCategorizedArticles, getCategorizedArticlesBySearch } = require("../../controllers/articleController/getCategorizedArticles");
const { getAuthorArticleCount } = require("../../controllers/authorController/getAuthorArticleCount");

const router = express.Router();

router.post("/", createArticle); // create new article
router.get("/", getAllArticles); // fetch all articles
router.get("/article-search/:keyword", getAllArticlesBySearch); // fetch all articles
router.get("/categorizedArticles/:category", getCategorizedArticles); // fetch all articles according to categories
router.get("/categorizedArticlesBySearch/:categoryAndKeyword", getCategorizedArticlesBySearch); // fetch all articles according to categories and search
router.get("/articleTags", getArticleTags); // fetch all article tags
router.get("/anArticle/:id", getAnArticle); // fetch an article
router.get("/authors-article-count/:authorId", getAuthorArticleCount); // fetch an author's article count
router.get("/authors-articles/:authorId", getAuthorArticles); // fetch all author's articles
router.put("/:id", updateArticle); // update article
router.delete("/:id", deleteArticle); // delete article

module.exports = router;
