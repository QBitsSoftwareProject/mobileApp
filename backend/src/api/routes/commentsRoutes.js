const express = require("express");
const {
  createComment,
} = require("../controllers/commentsController/createComments");
const {
  getComments,
  getAComment,
  getUpdatedComment,
  getCommentsCount,
} = require("../controllers/commentsController/getComments");
const {
  updateComment,
} = require("../controllers/commentsController/updateComments");
const {
  deletecomments,
} = require("../controllers/commentsController/deleteComments");

const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/", auth, createComment);
router.get("/view-comments/:postId", auth, getComments);
router.get("/get-comment-count/:postId", auth, getCommentsCount);
router.get("/view-one-comment/:commentId", auth, getAComment);
router.get("/view-updated-comment/:commentId", auth, getUpdatedComment);
router.put("/update-comment/:commentId", auth, updateComment);
router.delete("/delete-comment/:commentId", auth, deletecomments);

module.exports = router;
