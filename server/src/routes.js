const router = require("express").Router();
const userController = require("./controllers/userController");
const orderController = require("./controllers/orderController");
const adminController = require("./controllers/adminController");
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


router.get("/admin/orders", authenticateToken, isAdmin, adminController.getOrders);
router.delete("/admin/orders/:id", authenticateToken, isAdmin, adminController.deleteOrder); 
router.put("/admin/orders/:id/status", authenticateToken, isAdmin, adminController.updateOrderStatus); 
router.get("/admin/users", authenticateToken, isAdmin, adminController.getUsers);
router.delete("/admin/users/:id",authenticateToken, isAdmin, adminController.deleteUser);


module.exports = router;
