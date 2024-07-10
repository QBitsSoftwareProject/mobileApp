const express = require("express");
const {
  getDoctors,
  getADoctor,
  getRegisteredDoctors,
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
const adminAuth = require("../middlewares/adminAuth");

const { viewADoctor } = require("../controllers/doctorControllers/viewDoctor");
const {
  updateDoctorRegStatus,
} = require("../controllers/doctorControllers/updateDoctorRegStatus");
const {
  updateDoctorAccessStatus,
} = require("../controllers/doctorControllers/updateDoctorAccessStatus");

const router = express.Router();

//doctor operations routes
router.get("/", auth, getDoctors);
router.get("/registered-docotors", auth, getRegisteredDoctors);
router.get("/one-doctor", auth, getADoctor);
router.put("/", auth, updateDoctor);
router.put("/updateRegStatus/:id", auth, adminAuth, updateDoctorRegStatus);
router.put(
  "/updateAccessStatus/:id",
  auth,
  adminAuth,
  updateDoctorAccessStatus
);
router.delete("/:id", auth, adminAuth, deleteDoctor);
router.post("/view-doctor", auth, viewADoctor);

router.post("/checkExistsDoctor", checkExistsDoctor);

//register route
router.post("/register", createDoctor);

module.exports = router;
