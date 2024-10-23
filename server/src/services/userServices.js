//userServices.js

const User = require("../models/User");
const jwt = require("jsonwebtoken");
const RefreshToken = require("../models/RefreshToken");

exports.signToken = (userId, isAdmin) => {
  return jwt.sign({ id: userId, isAdmin: isAdmin }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

exports.signRefreshToken = (userId, isAdmin) => {
  return jwt.sign(
    { id: userId, isAdmin: isAdmin },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

exports.registerUser = async (email, password, isAdmin = false) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists with this email");
  }

  const newUser = await User.create({ email, password, isAdmin });

  const accessToken = exports.signToken(newUser._id, newUser.isAdmin);
  const refreshToken = exports.signRefreshToken(newUser._id, newUser.isAdmin);

  await RefreshToken.create({
    userId: newUser._id,
    token: refreshToken,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 дни
  });

  return {
    accessToken,
    refreshToken,
    user: newUser,
  };
};

exports.loginUser = async (email, password) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    throw new Error("Incorrect email or password");
  }

  user.password = undefined;

  const accessToken = exports.signToken(user._id, user.isAdmin);
  const refreshToken = exports.signRefreshToken(user._id, user.isAdmin);

  await RefreshToken.findOneAndDelete({ userId: user._id });

  await RefreshToken.create({
    userId: user._id,
    token: refreshToken,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  return {
    accessToken,
    refreshToken,
    user,
  };
};
