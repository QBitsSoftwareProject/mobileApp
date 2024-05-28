const jwt = require("jsonwebtoken");
const { TOKEN_KEY } = require("../../config/env");

// Middleware function to verify the authentication token
function auth(req, res, next) {
  // Extracting the token from the request headers
  const token = req.headers["authtoken"];

  // Checking if the token exists in the request headers
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    // Verifying the token using the TOKEN_KEY
    const decoded = jwt.verify(token, TOKEN_KEY);

    // Storing the decoded user information in the request object
    req.user = decoded;
    next();
  } catch (err) {
    // If token verification fails, sending a 401 Unauthorized status with an error message
    res.status(401).send({ messege: "Invalid Token" });
  }
}

module.exports = auth;
