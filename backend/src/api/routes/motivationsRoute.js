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

const router = express.Router();

//Motivation operations routes
router.post("/create", createMotivation);
router.get("/get-all", getMotivation);
router.get("/get-one/:id", getAMotivation);
router.put("/update/:id", updateMotivation);
router.delete("/delete/:id", deleteMotivation);

router.get("/get-one-by-day", auth, getAMotivationByDay);

module.exports = router;
