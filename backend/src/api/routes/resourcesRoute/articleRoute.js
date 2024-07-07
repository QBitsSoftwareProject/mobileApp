const express = require("express");

const auth = require("../../middlewares/auth");
const adminAuth = require("../../middlewares/adminAuth");

const { getAllArticles, getAnArticle, getAuthorArticles, getAllArticlesBySearch } = require("../../controllers/articleController/getAllArticles");
const { createArticle } = require("../../controllers/articleController/createArticle");
const { updateArticle } = require("../../controllers/articleController/updateArticle");
const { deleteArticle } = require("../../controllers/articleController/deleteArticle");
const { getArticleTags } = require("../../controllers/articleController/getArticleTags");
const { getCategorizedArticles, getCategorizedArticlesBySearch } = require("../../controllers/articleController/getCategorizedArticles");
const { getAuthorArticleCount } = require("../../controllers/authorController/getAuthorArticleCount");
const { getFavoriteArticles } = require("../../controllers/articleController/getFavoriteArticles");

const router = express.Router();

router.post("/", adminAuth, createArticle); // create new article
router.get("/", getAllArticles); // fetch all articles
router.post("/getFavoriteArticles/", auth, getFavoriteArticles); // fetch favorite articles
router.get("/article-search/:keyword", auth, getAllArticlesBySearch); // fetch all articles
router.get("/categorizedArticles/:category", auth, getCategorizedArticles); // fetch all articles according to categories
router.get("/categorizedArticlesBySearch/:categoryAndKeyword", auth, getCategorizedArticlesBySearch); // fetch all articles according to categories and search
router.get("/articleTags", getArticleTags); // fetch all article tags
router.get("/anArticle/:id", getAnArticle); // fetch an article
router.get("/authors-article-count/:authorId", getAuthorArticleCount); // fetch an author's article count
router.get("/authors-articles/:authorId", getAuthorArticles); // fetch all author's articles
router.put("/:id", adminAuth, updateArticle); // update article
router.delete("/:id", adminAuth, deleteArticle); // delete article

module.exports = router;
