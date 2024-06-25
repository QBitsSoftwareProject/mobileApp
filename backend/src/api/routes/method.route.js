const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");

const {
  storeMethod,
  getAllMethods,
  updateMethod,
} = require("../controllers/mindRelaxingMethodController/method.controller");
const {
  methodSuggestion,
} = require("../controllers/mindRelaxingMethodController/methodSuggestion");

router.post("/add-method", storeMethod);
router.get("/get-method", getAllMethods);
router.post("/update-method/:id", updateMethod);

//method suggestion
router.post("/video-suggestion", auth, methodSuggestion);

module.exports = router;
