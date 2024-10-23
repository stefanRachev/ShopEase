// controllers/adminController.js
const Order = require("../models/Order");
const User = require("../models/User");

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

exports.updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
    if (!order) {
      return res
        .status(404)
        .json({ status: "error", message: "Order not found" });
    }

    res
      .status(200)
      .json({ status: "success", message: "Order status updated", order });
  } catch (error) {
    console.error("Error updating order status:", error);
    res
      .status(500)
      .json({ status: "error", message: "Error updating order status" });
  }
};



exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Изключваме паролата от резултатите
    res.status(200).json({ status: "success", users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ status: "error", message: "Error fetching users" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ status: "success", message: "User deleted" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ status: "error", message: "Error deleting user" });
  }
};


