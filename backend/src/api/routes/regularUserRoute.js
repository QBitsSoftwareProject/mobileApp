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
const {
  checkExistsUser,
} = require("../controllers/regularUserControllers/checkExistsUser");

const router = express.Router();

//user operations routes
router.get("/", getRegularUsers);
router.get("/:id", getARegularUser);
router.put("/:id", updateRegularUser);
router.delete("/:id", deleteRegularUser);

router.post("/checkExistsUser", checkExistsUser);

//register and login routes
router.post("/login", loginUser);
router.post("/register", createRegularUser);

module.exports = router;
