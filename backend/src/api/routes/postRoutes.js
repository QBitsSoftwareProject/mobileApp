const express = require("express");

const auth = require("../middlewares/auth");
const { createPost } = require("../controllers/postController/createPost");
const { getPost } = require("../controllers/postController/getPost");
const { updatePost } = require("../controllers/postController/updatePost");
const { deletePost } = require("../controllers/postController/deletePost");

const router = express.Router();

router.post("/", createPost);
router.get("/view-post", getPost);
router.put("/update-post/" + id, updatePost);
router.delete("/delete-post/" + id, deletePost);

module.exports = router;
