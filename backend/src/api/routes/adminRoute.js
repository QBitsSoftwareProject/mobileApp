const express = require("express");
const { loginAdmin } = require("../controllers/admin/logAdmin");

const router = express.Router();

//admin operations
router.post("/login", loginAdmin);

module.exports = router;