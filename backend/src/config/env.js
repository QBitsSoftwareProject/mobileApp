// const env = require("dotenv").config();

// module.exports = {
//   PORT: process.env.PORT || 3000,
//   DB_URI: process.env.DB_URI,
//   TOKEN_KEY: process.env.TOKEN_KEY,
// };

const dotenv = require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI,
  TOKEN_KEY: process.env.TOKEN_KEY,
  ADMIN_TOKEN_KEY: process.env.ADMIN_TOKEN_KEY,
};
