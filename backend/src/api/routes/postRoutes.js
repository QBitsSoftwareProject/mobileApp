const express = require("express");

// const auth = require("../middlewares/auth");
const { createPost } = require("../controllers/postController/createPost");
const {
  getPost,
  getDeletedPost,
  getUpdatedPost,
  getAPost,
} = require("../controllers/postController/getPost");
const { updatePost } = require("../controllers/postController/updatePost");
const { deletePost } = require("../controllers/postController/deletePost");

const router = express.Router();

router.post("/", createPost);
router.get("/view-post", getPost);
router.get("/view-one-post", getAPost);
router.get("/view-updated-post", getUpdatedPost);
router.get("/view-deleted-post", getDeletedPost);
router.put("/update-post/:id", updatePost);
router.delete("/delete-post/:postId", deletePost);

module.exports = router;
