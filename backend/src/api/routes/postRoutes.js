const express = require("express");

const auth = require("../middlewares/auth");
const { createPost } = require("../controllers/postController/createPost");
const { getPost } = require("../controllers/postController/getPost");
const { updatePost } = require("../controllers/postController/updatePost");
const { deletePost } = require("../controllers/postController/deletePost");

const router = express.Router();

router.post("/", auth, createPost);
router.get("/view-post", auth, getPost);
router.put("/update-post/:postId", auth, updatePost);
router.delete("/delete-post/:postId", auth, deletePost);

module.exports = router;
