const express = require("express");
const router = express.Router();

const{
    storeMethod,
    getAllMethods,
    updateMethod
    
} = require("../controllers/mindRelaxingMethodController/method.controller");

router.post("/add-method", storeMethod);
router.get("/get-method",getAllMethods);
router.post("/update-method/:id",updateMethod);


module.exports = router;