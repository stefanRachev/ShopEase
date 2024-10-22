// middleware/adminMiddleware.js
const User = require("../models/User");

const isAdmin = async (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (!req.user.isAdmin) {
    return res.status(403).json({ message: "Access denied, not an admin" });
  }

  next();
};

module.exports = { isAdmin };
