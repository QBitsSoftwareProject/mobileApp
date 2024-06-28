const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");

const {
  storeMethod,
  getAllMethods,
  updateMethod,
  getMethodById,
  deleteMethodById
} = require("../controllers/mindRelaxingMethodController/method.controller");
const {
  methodSuggestion,
} = require("../controllers/mindRelaxingMethodController/methodSuggestion");

router.post("/add-method", storeMethod);
router.get("/get-method", getAllMethods);
router.put("/update-method/:id", updateMethod);
router.get("/get-methodbyid/:id", getMethodById);
router.delete("/delete-methodbyid/:id", deleteMethodById);

//method suggestion 
router.post("/video-suggestion", auth, methodSuggestion);

module.exports = router;
