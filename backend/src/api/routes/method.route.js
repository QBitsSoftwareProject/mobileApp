const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const adminAuth = require("../middlewares/adminAuth");

const {
  storeMethod,
  getAllMethods,
  updateMethod,
  getMethodById,
  deleteMethodById,
} = require("../controllers/mindRelaxingMethodController/method.controller");
const {
  methodSuggestion,
} = require("../controllers/mindRelaxingMethodController/methodSuggestion");

router.post("/add-method", auth, adminAuth, storeMethod);
router.get("/get-method", auth, adminAuth, getAllMethods);
router.put("/update-method/:id", auth, adminAuth, updateMethod);
router.put("/update-method-rate/:id", auth, updateMethod);
router.get("/get-methodbyid/:id", auth, getMethodById);
router.delete("/delete-methodbyid/:id", auth, adminAuth, deleteMethodById);

//method suggestion
router.post("/video-suggestion", auth, methodSuggestion);

module.exports = router;
