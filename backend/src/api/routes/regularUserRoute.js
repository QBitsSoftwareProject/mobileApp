const express = require("express");
const {
  createRegularUser,
} = require("../controllers/regularUserControllers/createController");

const {
  updateRegularUser,
} = require("../controllers/regularUserControllers/updateController");

const {
  deleteRegularUser,
} = require("../controllers/regularUserControllers/deleteController");

const {
  getRegularUsers,
  getARegularUser,
} = require("../controllers/regularUserControllers/getController");

const {
  loginUser,
} = require("../controllers/regularUserControllers/loginController");

const router = express.Router();

//user operations routes
router.get("/", getRegularUsers);
router.get("/:id", getARegularUser);
router.put("/:id", updateRegularUser);
router.delete("/:id", deleteRegularUser);

//register and login routes
router.post("/login", loginUser);
router.post("/register", createRegularUser);

module.exports = router;
