const express = require("express");
const {
  getDoctors,
  getADoctor,
} = require("../controllers/doctorControllers/getController");
const {
  updateDoctor,
} = require("../controllers/doctorControllers/updateController");
const {
  deleteDoctor,
} = require("../controllers/doctorControllers/deleteController");
const {
  createDoctor,
} = require("../controllers/doctorControllers/createController");
const {
  checkExistsDoctor,
} = require("../controllers/doctorControllers/checkExistsDoctor");

const router = express.Router();

//user operations routes
router.get("/", getDoctors);
router.get("/:id", getADoctor);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

router.post("/checkExistsDoctor", checkExistsDoctor);

//register route
router.post("/register", createDoctor);

module.exports = router;