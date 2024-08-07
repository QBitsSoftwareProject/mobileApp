const express = require("express");
const auth = require("../middlewares/auth");
const adminAuth = require("../middlewares/adminAuth");

const {
  createRegularUser,
} = require("../controllers/regularUserControllers/createController");

const {
  updateRegularUser,
  updateUserAccessStatus,
} = require("../controllers/regularUserControllers/updateController");

const {
  deleteRegularUser,
} = require("../controllers/regularUserControllers/deleteController");

const {
  getRegularUsers,
  getARegularUser,
  getRegularUserById,
  getARegularUserById,
} = require("../controllers/regularUserControllers/getController");

const {
  loginUser,
} = require("../controllers/regularUserControllers/loginController");
const {
  checkExistsUser,
} = require("../controllers/regularUserControllers/checkExistsUser");

const {
  getUsersByMonth,
} = require("../controllers/regularUserControllers/getUsersByMonth");
const {
  editFavoriteVideos,
} = require("../controllers/regularUserControllers/editFavoriteVideos");
const {
  editFavoriteAudios,
} = require("../controllers/regularUserControllers/editFavoriteAudios");
const {
  editFavoriteArticles,
} = require("../controllers/regularUserControllers/editFavoriteArticles");

const router = express.Router();

//user operations routes
router.get("/", auth, adminAuth, getRegularUsers);
router.get("/one-user", auth, getARegularUser);
router.get("/user-by-id/:userId", auth, getRegularUserById);
router.get("/one-user-by-id/:userId", getARegularUserById);
router.get("/get-users-by-month/", auth, adminAuth, getUsersByMonth);
router.put("/", auth, updateRegularUser);
router.put("/edit-user-access/:id", auth, adminAuth, updateUserAccessStatus);
router.put("/edit-favorites/video/:id", auth, editFavoriteVideos);
router.put("/edit-favorites/audio/:id", auth, editFavoriteAudios);
router.put("/edit-favorites/article/:id", auth, editFavoriteArticles);
router.delete("/:id", auth, deleteRegularUser);

router.post("/checkExistsUser", checkExistsUser);

//register and login routes
router.post("/login", loginUser);
router.post("/register", createRegularUser);

//token expiring check
router.get("/token-check", auth);

module.exports = router;
