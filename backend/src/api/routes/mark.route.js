const express = require("express");
const router = express.Router();

// const{
//     storeMark,
//     getMarkById
// } = require("../controllers/mark.controller");

const{
    storeMark,
} = require("../controllers/mark.controllers/mark.storeController");

const{
    getMarkById
} = require("../controllers/mark.controllers/mark.getController");

const{
    getSortedMarkById
} = require("../controllers/mark.controllers/mark.getSorted");


router.post("/add-mark", storeMark);
router.get("/get-mark-by-id/:userid",getMarkById);
router.get("/get-sorted-mark-by-id/:userid",getSortedMarkById);

module.exports = router;