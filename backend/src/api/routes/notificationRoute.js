const express = require("express");

const auth = require("../middlewares/auth");
const {
  notificationStatusUpdate,
} = require("../controllers/notificationController.js/notificationStatusUpdate");
const {
  getNotification,
} = require("../controllers/notificationController.js/getNotification");
const {
  checkNotifiaction,
} = require("../controllers/notificationController.js/checkUnReadNotification");
const {
  deleteAllNotification,
} = require("../controllers/notificationController.js/deleteNotification");

const router = express.Router();

router.get("/get-notification", auth, getNotification);
router.get("/status-update/:notificationId", auth, notificationStatusUpdate);
router.get("/check-notification", auth, checkNotifiaction);
router.delete("/delete-notifications", auth, deleteAllNotification);

module.exports = router;
