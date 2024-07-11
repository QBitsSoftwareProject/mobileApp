const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const adminAuth = require("../middlewares/adminAuth");

// const{
//     storeMark,
//     getMarkById
// } = require("../controllers/mark.controller");

const {
  storeMark,
} = require("../controllers/mark.controllers/mark.storeController");

const {
  getMarkById,
} = require("../controllers/mark.controllers/mark.getController");

const {
  getSortedMarkById,
} = require("../controllers/mark.controllers/mark.getSorted");

const { getAllMarks } = require("../controllers/markController/getMarks");

router.post("/add-mark", auth, storeMark);
router.get("/get-mark-by-id", auth, getMarkById);
router.get("/get-sorted-mark-by-id", auth, getSortedMarkById);
router.get("/get-all-marks", auth, adminAuth, getAllMarks);

module.exports = router;
