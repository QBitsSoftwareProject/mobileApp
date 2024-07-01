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
const auth = require("../middlewares/auth");
const { viewADoctor } = require("../controllers/doctorControllers/viewDoctor");
const {
  updateDoctorRegStatus,
} = require("../controllers/doctorControllers/updateDoctorRegStatus");
const {
  updateDoctorAccessStatus,
} = require("../controllers/doctorControllers/updateDoctorAccessStatus");

const router = express.Router();

//user operations routes
router.get("/", getDoctors);
router.get("/one-doctor", auth, getADoctor);
router.put("/", auth, updateDoctor);
router.put("/updateRegStatus/:id", updateDoctorRegStatus);
router.put("/updateAccessStatus/:id", updateDoctorAccessStatus);
router.delete("/:id", deleteDoctor);
router.post("/view-doctor", viewADoctor);

router.post("/checkExistsDoctor", checkExistsDoctor);

//register route
router.post("/register", createDoctor);

module.exports = router;
