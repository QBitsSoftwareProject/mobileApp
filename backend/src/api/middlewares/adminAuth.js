// middlewares/adminAuth.js
function adminAuth(req, res, next) {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).send("Access denied. Admins only.");
  }
}

module.exports = adminAuth;
