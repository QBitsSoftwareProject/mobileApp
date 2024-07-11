const express = require("express");
const {
  createMotivation,
} = require("../controllers/motivationsController/createController");
const {
  getMotivation,
  getAMotivation,
  getAMotivationByDay,
} = require("../controllers/motivationsController/getController");
const {
  updateMotivation,
} = require("../controllers/motivationsController/updateController");
const {
  deleteMotivation,
} = require("../controllers/motivationsController/deleteController");

const auth = require("../middlewares/auth");
const adminAuth = require("../middlewares/adminAuth");

const router = express.Router();

//Motivation operations routes
router.post("/create", auth, adminAuth, createMotivation);
router.get("/get-all", auth, adminAuth, getMotivation);
router.get("/get-one/:id", auth, getAMotivation);
router.put("/update/:id", auth, adminAuth, updateMotivation);
router.delete("/delete/:id", auth, adminAuth, deleteMotivation);

router.get("/get-one-by-day", auth, getAMotivationByDay);

module.exports = router;
