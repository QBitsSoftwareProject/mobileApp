const express = require("express");

const auth = require("../middlewares/auth");
const {
  notificationStatusUpdate,
} = require("../controllers/notificationController.js/notificationStatusUpdate");
const {
  getNotification,
} = require("../controllers/notificationController.js/getNotification");

const router = express.Router();

router.get("/get-notification", auth, getNotification);
router.post("/status-update/:notificationId", auth, notificationStatusUpdate);

module.exports = router;
