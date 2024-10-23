const router = require("express").Router();
const userController = require("./controllers/userController");
const orderController = require("./controllers/orderController");
const authenticateToken = require("./middlewares/authMiddleware");
const { isAdmin } = require("./middlewares/adminMiddleware");

router.get("/me", authenticateToken, userController.getMe);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", authenticateToken, userController.logout);
router.post("/refresh-token", userController.refreshToken);
router.post("/orders", authenticateToken, orderController.createOrder);
router.get("/orders", authenticateToken, orderController.getUserOrders);
router.get("/orders/:id", orderController.getOrderById);

router.delete("/orders/:id", authenticateToken, isAdmin, orderController.deleteOrder);
router.put("/orders/:id/status", authenticateToken, isAdmin, orderController.updateOrderStatus);

module.exports = router;
