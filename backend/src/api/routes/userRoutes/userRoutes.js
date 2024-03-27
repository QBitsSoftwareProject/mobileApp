const express = require ("express");
const { createUser } = require("../../controllers/userController/createUsers");

const router = express.Router;

router.post("/" , createUser);

module.exports = express.Router;