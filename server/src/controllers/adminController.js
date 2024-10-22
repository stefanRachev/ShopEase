// controllers/adminController.js
const Order = require("../models/Order");

// Функция за получаване на поръчките
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "email");
    res.status(200).json({
      status: "success",
      orders,
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({
      status: "error",
      message: "Error fetching orders",
    });
  }
};

// Добави и други функции за управление на поръчки (например, изтриване)
exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await Order.findByIdAndDelete(id);
    res.status(200).json({ status: "success", message: "Order deleted" });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({ status: "error", message: "Error deleting order" });
  }
};
