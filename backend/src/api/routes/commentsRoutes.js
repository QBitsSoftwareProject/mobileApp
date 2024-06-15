const express = require("express");
const {
  createComment,
} = require("../controllers/commentsController/createComments");
const {
  getComments,
  getAComment,
  getUpdatedComment,
} = require("../controllers/commentsController/getComments");
const {
  updateComment,
} = require("../controllers/commentsController/updateComments");
const {
  deletecomments,
} = require("../controllers/commentsController/deleteComments");

// const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/", createComment);
router.get("/view-comments/:postId", getComments);
router.get("/view-one-comment/:commentId", getAComment);
router.get("/view-updated-comment/:commentId", getUpdatedComment);
router.put("/update-comment/:commentId", updateComment);
router.delete("/delete-comment/:commentId", deletecomments);

module.exports = router;
