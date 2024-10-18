const router = require("express").Router();
const userController = require("./controllers/userController");
const orderController = require("./controllers/orderController");
const authenticateToken = require("./middlewares/authMiddleware");

router.get("/me", authenticateToken, userController.getMe);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout",authenticateToken, userController.logout);
router.post("/refresh-token", userController.refreshToken);
router.post("/orders", authenticateToken, orderController.createOrder);
router.get("/orders", authenticateToken, orderController.getUserOrders);


module.exports = router;