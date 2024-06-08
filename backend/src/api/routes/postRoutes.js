const express = require("express");

const auth = require("../middlewares/auth");
const { createPost } = require("../controllers/postController/createPost");
const { getPost } = require("../controllers/postController/getPost");

const router = express.Router();

router.post("/", auth, createPost);
router.get("/post", auth, getPost);

module.exports = router;
