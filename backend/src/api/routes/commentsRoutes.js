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
router.get("/view-post", getComments);
router.get("/view-one-post/:postId", getAComment);
router.get("/view-updated-post/:postId", getUpdatedComment);
router.put("/update-post/:postId", updateComment);
router.delete("/delete-post/:postId", deletecomments);

module.exports = router;
